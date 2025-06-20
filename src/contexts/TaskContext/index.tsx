import * as React from "react";
import {useEffect, useReducer, useRef} from "react";
import {initialTaskState} from "./initialTaskState.ts";
import {TaskContext} from './TextContext.tsx'
import {taskReducer} from "./taskReducer.ts";
import {type TaskActionModel, TaskActionType} from "./taskActions.ts";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import {WorkerManager} from "../../utils/webWorkerManager.ts";
import {loadBeep} from "../../utils/loadBeep.ts";
import {showMessage} from "../../adapters/showMessage.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

    const [state, dispatch] = useReducer<TaskStateModel, TaskStateModel, [TaskActionModel] >(
        taskReducer,
        initialTaskState,
        () => {
            const storageState = localStorage.getItem("state");
            if(storageState === null) return initialTaskState;

            const parsedState = JSON.parse(storageState) as TaskStateModel;

            return {
                ...parsedState,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: "00:00",
            };
        }
    );
    const worker = WorkerManager.getInstance();
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    worker.onmessage(e => {
        const count = e.data

        if (count <= 0) {
            if(playBeepRef.current){
                playBeepRef.current()
                playBeepRef.current = null
            }

            dispatch({type: TaskActionType.COMPLETE_TASK});
            showMessage.success("Tarefa Concluída")
            worker.terminate()
        } else {
            dispatch({type: TaskActionType.COUNT_DOWN, payload: {secondsRemaining: count}});
        }
    })

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));

        if(!state.activeTask) {
            worker.terminate();
        }

        document.title = `${state.formatedSecondsRemaining} - Chronos Pomodoro`

        worker.postMessage(state)
    }, [state, worker])

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep()
        } else {
            playBeepRef.current = null
        }
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}