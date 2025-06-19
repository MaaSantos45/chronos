import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";
import styles from './styles.module.css'
import {DefaultButton} from "../DefaultButton";
import {PlayCircleIcon, StopCircleIcon} from "lucide-react";
import * as React from "react";
import {useEffect, useState} from "react";
import type {TaskModel} from "../../models/TaskModel.tsx";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";
import {getCycle} from "../../utils/getCycle.ts";
import {getCycleTime} from "../../utils/getCycleTime.ts";
import {Tips} from "../Tips";
import {showMessage} from "../../adapters/showMessage.ts";


export function MainForm() {
    const { state, dispatch } = useTaskContext()
    const [ taskName, setTaskName ] = useState('');
    const lastTask = state.tasks[state.tasks.length - 1]?.name || '';

    useEffect(() => {
        if(lastTask){
            setTaskName(lastTask);
        }
    }, [lastTask]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value)
    }

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const taskNameValue = taskName.trim();

        if(!taskNameValue){
            showMessage.warning("Digite o nome da tarefa");
            return;
        }

        const nextCycle = getCycle(state.currentCycle)
        const nextCycleTime = getCycleTime(nextCycle)

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskNameValue,
            startDate: Date.now(),
            completeDate: null,
            interupted: false,
            duration: state.config[nextCycleTime],
            type: nextCycleTime,
        }

        dispatch({type: "START_TASK", payload: newTask})
        showMessage.info("Tarefa Iniciada")
    }

    function handleInterrupt() {
        dispatch({type: "INTERRUPT_TASK"})
        showMessage.error("Tarefa Interrompida")
    }

    const buttonIcon = {
        green: <PlayCircleIcon />,
        red: <StopCircleIcon />,
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleCreateNewTask} action="">
                <div className={styles.formRow}>
                    <DefaultInput
                        id={'myInput'}
                        type={'text'}
                        label={'Task'}
                        placeholder={'Digite Algo'}
                        value={taskName}
                        onChange={handleChange}
                        disabled={!!state.activeTask}
                    />
                </div>

                <div className={styles.formRow}>
                    <Tips />
                </div>

                {state.currentCycle > 0 && (
                    <div className={styles.formRow}>
                        <Cycles />
                    </div>
                )}

                <div className={styles.formRow}>
                    {!state.activeTask ? (
                        <DefaultButton
                            color={'green'}
                            type={'submit'}
                            aria-label={'Iniciar Tarefa'}
                            key={'SubmitButton'}
                        >
                            {buttonIcon['green']}
                        </DefaultButton>
                    ) : (
                        <DefaultButton
                            color={'red'}
                            type={'button'}
                            aria-label={'Interromper Tarefa Atual'}
                            onClick={handleInterrupt}
                            key={'InterruptButton'}
                        >
                            {buttonIcon['red']}
                        </DefaultButton>
                    )}
                </div>
            </form>
        </>
    )
}