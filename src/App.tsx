// import { useState } from 'react'
import './styles/theme.css'
import './styles/global.css'
import './styles/App.css'
import {Container, ContainerFluid} from "./components/Container";
import {Heading} from "./components/Heading";


function App() {

  return (
    <>
        <ContainerFluid>
            <Container>
                <Heading>
                    LOGO
                </Heading>
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
