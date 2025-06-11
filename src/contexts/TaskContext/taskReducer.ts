import {type TaskActionModel, TaskActionType} from "./taskActions.ts";
import type {TaskStateModel} from "../../models/TaskStateModel.tsx";
import {getCycle} from "../../utils/getCycle.ts";
import {formatSeconds} from "../../utils/formatSeconds.ts";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {

    switch (action.type) {
        case TaskActionType.START_TASK: {
            const nextCycle = getCycle(state.currentCycle)
            const secondsRemaining: number = action.payload.duration * 60;

            return {
                ...state,
                activeTask: action.payload,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formatedSecondsRemaining: formatSeconds(secondsRemaining),
                tasks: [...state.tasks, action.payload]
            }
        }

        case TaskActionType.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: formatSeconds(0),
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id === task.id) {
                        return {...task, completeDate: Date.now(), interupted: true};
                    }
                    return task;
                })
            }
        }

        case TaskActionType.COMPLETE_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: formatSeconds(0),
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id === task.id) {
                        return {...task, completeDate: Date.now(), interupted: false};
                    }
                    return task;
                })
            }
        }

        case TaskActionType.COUNT_DOWN: {
            return {
                ...state,
                secondsRemaining: action.payload.secondsRemaining,
                formatedSecondsRemaining: formatSeconds(action.payload.secondsRemaining),
            }
        }

        case TaskActionType.RESET_STATE: {

            return state
        }

        default: {

            return state;
        }
    }
}
