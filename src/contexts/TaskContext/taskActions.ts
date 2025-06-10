// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type {TaskModel} from "../../models/TaskModel.tsx";

export const TaskActionType = {
    START_TASK: "START_TASK",
    INTERRUPT_TASK: "INTERRUPT_TASK",
    RESET_STATE: "RESET_STATE"
} as const;

export type TaskActionModel =
    | {type: typeof TaskActionType.START_TASK, payload: TaskModel,}
    | {type: typeof TaskActionType.INTERRUPT_TASK,}
    | {type: typeof TaskActionType.RESET_STATE,};
