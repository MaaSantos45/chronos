import {useContext} from "react";
import {TaskContext} from "./TextContext.tsx";

export function useTaskContext() {
    return useContext(TaskContext);
}