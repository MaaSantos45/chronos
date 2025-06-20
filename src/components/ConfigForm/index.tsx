import styles from './styles.module.css'
import {DefaultInput} from "../DefaultInput";
import {DefaultButton} from "../DefaultButton";
import {SaveIcon} from "lucide-react";
import {type FormEvent, useRef} from "react";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";
import {showMessage} from "../../adapters/showMessage.ts";
import {TaskActionType} from "../../contexts/TaskContext/taskActions.ts";


export function ConfigForm() {
    const {state, dispatch} = useTaskContext()

    const workTimeRef = useRef<HTMLInputElement>(null);
    const breakTimeRef = useRef<HTMLInputElement>(null);
    const restTimeRef = useRef<HTMLInputElement>(null);

    const errors: string[] = []

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const workTime = Number(workTimeRef.current?.value);
        const breakTime = Number(breakTimeRef.current?.value);
        const restTime = Number(restTimeRef.current?.value);

        if (isNaN(workTime) || isNaN(breakTime) || isNaN(restTime)) {
            errors.push('Digite apenas numeros')
        }

        if ((!isNaN(workTime) && !(0 < workTime && workTime <= 90) )) {
            errors.push('Foco deve ser ENTRE 1 a 90')
        }

        if ((!isNaN(breakTime) && !(0 < breakTime && breakTime <= 30) )) {
            errors.push('Pausa deve ser ENTRE 1 a 30')
        }

        if ((!isNaN(restTime) && !(0 < restTime && restTime <= 60) )) {
            errors.push('Descanso deve ser ENTRE 1 a 60')
        }

        if (errors.length > 0) {
            showMessage.dismiss()
            errors.forEach(e => {
                showMessage.error(e)
            })
            errors.splice(0, errors.length)
            return;
        }

        dispatch({
            type: TaskActionType.CHANGE_SETTINGS,
            payload: {
                workTime: workTime,
                breakTime: breakTime,
                restTime: restTime,
            }
        })
        showMessage.success("Configurações Salvas com Sucesso")
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} action="">
                <div className={styles.formRow}>
                    <DefaultInput
                        id={'workTime'}
                        type={'number'}
                        min={1}
                        max={90}
                        label={'Foco'}
                        ref={workTimeRef}
                        defaultValue={state.config.workTime}
                    />
                </div>

                <div className={styles.formRow}>
                    <DefaultInput
                        id={'breakTime'}
                        type={'number'}
                        min={1}
                        max={30}
                        label={'Pausa'}
                        ref={breakTimeRef}
                        defaultValue={state.config.breakTime}
                    />
                </div>

                <div className={styles.formRow}>
                    <DefaultInput
                        id={'restTime'}
                        type={'number'}
                        min={1}
                        max={60}
                        label={'Descanso'}
                        ref={restTimeRef}
                        defaultValue={state.config.restTime}
                    />
                </div>

                <div className={styles.formRow}>
                    <DefaultButton aria-label={'Salvar as Configurações'} title={'Salvar Configurações'}>
                        <SaveIcon />
                    </DefaultButton>
                </div>
            </form>
        </>
    )
}