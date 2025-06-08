import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";
import {getCycleTime} from "../../utils/getCycleTime.ts";
import {getCycle} from "../../utils/getCycle.ts";

export function Cycles() {
    const {state} = useTaskContext()
    const steps = Array(state.currentCycle).fill(null)

    const descriptor = {
        workTime: 'Trabalho',
        breakTime: 'Pausa',
        restTime: 'Descanso',
    }
    return (
        <>
            <div className={styles.cycles}>
                <span>Ciclos: </span>

                <div className={styles.cycleDots}>
                    {steps.map((_, index) => {
                        const next = getCycle(index)
                        const time = getCycleTime(next)
                        return (
                            <span
                                className={`${styles.cycleDot} ${styles[time]}`}
                                aria-label={`Indicador de ciclo de ${descriptor[time]} ${next}`}
                                title={`Indicador de ciclo de ${descriptor[time]} ${next}`}
                                key={`${next}_${time}`}
                            ></span>
                        )
                    })}
                    {/**/}
                </div>
            </div>
        </>
    )
}