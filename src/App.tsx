// import { useState } from 'react'
import {Container, ContainerFluid} from "./components/Container";
import {Heading} from "./components/Heading";
import {Logo} from "./components/Logo";
import {CountDown} from "./components/CountDown"

import './styles/theme.css'
import './styles/global.css'
import './styles/App.css'
import {Menu} from "./components/Menu";


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
                <Heading>
                   FOOTER
                </Heading>
            </Container>
        </ContainerFluid>
    </>
  )
}

export default App
