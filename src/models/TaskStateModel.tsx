import type {TaskModel} from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];

    secondsRemaining: number;
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number

    config: {
        "workTime": number,
        "breakTime": number,
        "restTime": number,
    }
};

