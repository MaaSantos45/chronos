// import { useState } from 'react'
import {Container, ContainerFluid} from "./components/Container";
import {Heading} from "./components/Heading";
import {Logo} from "./components/Logo";

import './styles/theme.css'
import './styles/global.css'
import './styles/App.css'


function App() {

  return (
    <>
        <ContainerFluid>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Heading>
                    MENU
                </Heading>
            </Container>

            <Container>
                <Heading>
                    FORM
                </Heading>
            </Container>

            <Container>
                <Heading>
                   FOOTER
                </Heading>
            </Container>
        </ContainerFluid>
    </>
  )
}

export default App
