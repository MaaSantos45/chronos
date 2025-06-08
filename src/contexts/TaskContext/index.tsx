import * as React from "react";
import {useState} from "react";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import {initialTaskState} from "./initialTaskState.ts";
import {TaskContext} from './TextContext.tsx'

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState<TaskStateModel>(initialTaskState);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    )
}