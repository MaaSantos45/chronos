import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import * as React from "react";
import {initialTaskState} from "./initialTaskState.ts";
import {createContext} from "react";

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>,
}

const initialValues = {
    state: initialTaskState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialValues);
