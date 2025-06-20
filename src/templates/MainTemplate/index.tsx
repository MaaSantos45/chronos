import { Container, ContainerFluid } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import * as React from "react";

import '../../styles/global.css'
import '../../styles/theme.css'

type MainTemplateProps = {
    children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplateProps) {

    return (
        <>
            <ContainerFluid>
                <Container>
                    <Logo />
                </Container>

                <Container>
                    <Menu />
                </Container>

                <Container>
                    { children }
                </Container>

                <Container>
                    <Footer />
                </Container>
            </ContainerFluid>
        </>
    )
}