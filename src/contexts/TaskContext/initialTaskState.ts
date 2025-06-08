import type {TaskStateModel} from "../../models/TaskStateModel.tsx";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        breakTime: 5,
        restTime: 15,
    },
};