import { MainTemplate } from "../../templates/MainTemplate";
import {Container} from "../../components/Container";
import {Heading} from "../../components/Heading";
import {DefaultButton} from "../../components/DefaultButton";
import {TrashIcon} from "lucide-react";
import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";


export function History() {
    const {state} = useTaskContext()


    function clearHistory() {

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
                                    <th>Tarefa</th>
                                    <th>Duração</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                            {state.tasks.map(task => {
                                return(
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}min</td>
                                        <td>{new Date(task.startDate).toLocaleString()}</td>
                                        <td>Completa</td>
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