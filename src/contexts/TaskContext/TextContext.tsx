import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import * as React from "react";
import {initialTaskState} from "./initialTaskState.ts";
import {createContext} from "react";
import type {TaskActionModel} from "./taskActions.ts";

type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.ActionDispatch<[action: TaskActionModel]>,
}

const initValues: TaskContextProps = {
    state: initialTaskState,
    dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initValues);
