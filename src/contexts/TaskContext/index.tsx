import * as React from "react";
import {useState} from "react";
// import {useReducer, useState} from "react";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import {initialTaskState} from "./initialTaskState.ts";
import {TaskContext} from './TextContext.tsx'
// import {taskReducer} from "./taskReducer.ts";
// import type {TaskActionModel} from "./taskActions.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState<TaskStateModel>(initialTaskState);

    // const [myState, dispatch] = useReducer<TaskStateModel, [TaskActionModel]>(taskReducer, initialTaskState);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    )
}