import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";

export function CountDown() {
    const {state, } = useTaskContext();

    return (
        <>
            <div className={styles.container}>
                <span>{state.formatedSecondsRemaining}</span>
            </div>
        </>
    )
}