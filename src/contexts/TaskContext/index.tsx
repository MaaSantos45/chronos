import * as React from "react";
import {useReducer} from "react";
import {initialTaskState} from "./initialTaskState.ts";
import {TaskContext} from './TextContext.tsx'
import {taskReducer} from "./taskReducer.ts";
import type {TaskActionModel} from "./taskActions.ts";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

    const [state, dispatch] = useReducer<TaskStateModel, [TaskActionModel]>(taskReducer, initialTaskState);

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}