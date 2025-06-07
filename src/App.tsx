// import { useState } from 'react'
import {Container, ContainerFluid} from "./components/Container";
import {Heading} from "./components/Heading";
import {Logo} from "./components/Logo";
import {CountDown} from "./components/CountDown"
import {Menu} from "./components/Menu";
import {Form} from "./components/Form";

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
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <Form />
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
