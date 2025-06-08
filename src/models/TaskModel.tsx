import type {TaskStateModel} from './TaskStateModel.tsx';

export type TaskModel = {
    id: string,
    name: string,
    duration: number,
    startDate: number,
    completeDate: number | null,
    interupted: boolean,
    type: keyof TaskStateModel['config'];
};

