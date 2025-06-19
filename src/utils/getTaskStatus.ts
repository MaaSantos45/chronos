import type {TaskModel} from "../models/TaskModel.tsx";


export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
    if(task.completeDate && !task.interupted) return "Completa"
    if(task.completeDate && task.interupted) return "Interrompida"

    if(activeTask !== null && activeTask.id === task.id) return "Em Progresso"

    return 'Abandonada'
}