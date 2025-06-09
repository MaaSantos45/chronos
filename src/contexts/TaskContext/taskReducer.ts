import {type TaskActionModel, TaskActionType} from "./taskActions.ts";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {

    switch (action.type) {
        case TaskActionType.START_TASK:
            return state

        case TaskActionType.INTERRUPT_TASK:
            return state

        case TaskActionType.RESET_STATE:
            return state
        default:
            return state;
    }
}
