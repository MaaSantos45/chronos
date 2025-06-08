import type {TaskModel} from "../models/TaskModel.tsx";

export function getCycleTime(cycle: number): TaskModel["type"]{
    if(cycle % 8 === 0) return "restTime"
    if(cycle % 2 === 0) return "breakTime"
    return "workTime"
}
