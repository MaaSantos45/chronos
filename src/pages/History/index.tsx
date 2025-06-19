import { MainTemplate } from "../../templates/MainTemplate";
import {Container} from "../../components/Container";
import {Heading} from "../../components/Heading";
import {DefaultButton} from "../../components/DefaultButton";
import {TrashIcon} from "lucide-react";
import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";
import {getTaskStatus} from "../../utils/getTaskStatus.ts";
import {type SortTaskOptions, sortTasks} from "../../utils/sortTasks.ts";
import {useState} from "react";


export function History() {
    const {state} = useTaskContext()
    // const sortedTasks = sortTasks({tasks: state.tasks})
    const [sortOptions, setSortOptions] = useState<SortTaskOptions>(() => {
        return {
            tasks: sortTasks({tasks: state.tasks}),
            field: 'startDate',
            direction: 'desc'
        }
    })

    function clearHistory() {

    }

    function handleSortTask({field}: Pick<SortTaskOptions, 'field'>) {
        const newDirection = sortOptions.direction === 'asc' ? 'desc' : 'asc';

        setSortOptions({
            tasks: sortTasks({
                tasks: sortOptions.tasks,
                direction: newDirection,
                field: field
            }),
            direction: newDirection,
            field: field
        })
    }

    const tiposState = {
        workTime: "Foco",
        breakTime: "Pausa",
        restTime: "Descanso"
    }

    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>
                        <span>History</span>
                        <span className={styles.buttonContainer}>
                            <DefaultButton color={"red"} title={"Clear"} onClick={clearHistory}>
                                <TrashIcon />
                            </DefaultButton>
                        </span>
                    </Heading>
                </Container>

                <Container>
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => handleSortTask({field: 'name'})}
                                        className={styles.thSort}
                                    >Tarefa ↕</th>
                                    <th
                                        onClick={() => handleSortTask({field: 'duration'})}
                                        className={styles.thSort}
                                    >Duração ↕</th>
                                    <th
                                        onClick={() => handleSortTask({field: 'startDate'})}
                                        className={styles.thSort}
                                    >Data ↕</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                            {sortOptions.tasks.map(task => {
                                return(
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}min</td>
                                        <td>{new Date(task.startDate).toLocaleString()}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{tiposState[task.type]}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </MainTemplate>
        </>
    )
}