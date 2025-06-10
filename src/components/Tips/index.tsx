import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";
import {getCycle} from "../../utils/getCycle.ts";
import {getCycleTime} from "../../utils/getCycleTime.ts";


export function Tips() {
    const {state} = useTaskContext()
    const nextCycle = getCycle(state.currentCycle)
    const nextTime = getCycleTime(nextCycle)

    const tipsActive = {
        workTime: <span>Foque por {state.config.workTime} min</span>,
        breakTime: <span>Pausa de {state.config.breakTime} min</span>,
        restTime: <span>Descanse por {state.config.restTime} min</span>,
    }
    const tipsNotActive = {
        workTime: <span>Próximo ciclo é de {state.config.workTime} min</span>,
        breakTime: <span>Próxima pausa é de {state.config.breakTime} min</span>,
        restTime: <span>Próximo descanso é de {state.config.restTime} min</span>,
    }

    return (
        <>
            <div className={styles.core}>
                {!!state.activeTask && tipsActive[state.activeTask.type]}
                {!state.activeTask && tipsNotActive[nextTime]}
            </div>
        </>
    )
}