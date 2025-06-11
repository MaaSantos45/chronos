import * as React from "react";
import {useEffect, useReducer} from "react";
import {initialTaskState} from "./initialTaskState.ts";
import {TaskContext} from './TextContext.tsx'
import {taskReducer} from "./taskReducer.ts";
import {type TaskActionModel, TaskActionType} from "./taskActions.ts";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import {WorkerManager} from "../../utils/webWorkerManager.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

    const [state, dispatch] = useReducer<TaskStateModel, [TaskActionModel]>(taskReducer, initialTaskState);

    const worker = WorkerManager.getInstance();

    worker.onmessage(e => {
        const count = e.data
        console.log(count);


        if  (count <= 0) {
            dispatch({type: TaskActionType.COMPLETE_TASK});
            worker.terminate()
        } else {
            dispatch({type: TaskActionType.COUNT_DOWN, payload: {secondsRemaining: count}});
        }
    })

    useEffect(() => {
        if(!state.activeTask){
            worker.terminate();
        }

        worker.postMessage(state)
    }, [state, worker])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}