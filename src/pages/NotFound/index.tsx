import { MainTemplate } from "../../templates/MainTemplate";
import {Container} from "../../components/Container";
import {Heading} from "../../components/Heading";

export function NotFound() {
    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>Página Não Encontrada</Heading>
                </Container>

                <Container>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis est exercitationem fugit labore maiores quae reiciendis sint temporibus voluptatem. Amet ex nemo nihil nobis quia quis ratione repellat voluptas!</p>
                </Container>
            </MainTemplate>
        </>
    )
}