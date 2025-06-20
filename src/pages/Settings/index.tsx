import styles from './styles.module.css'
import {MainTemplate} from "../../templates/MainTemplate";
import {Container} from "../../components/Container";
import {Heading} from "../../components/Heading";
import {ConfigForm} from "../../components/ConfigForm";


export function Settings() {
    return (
        <>
            <MainTemplate >
                <Container>
                    <Heading>
                        Configurações
                    </Heading>
                </Container>
                <Container>
                    <p className={styles.core}>Modifique as configurações para tempo de foco, pausa e descanso</p>
                </Container>

                <Container>
                    <ConfigForm />
                </Container>
            </MainTemplate>
        </>
    )
}