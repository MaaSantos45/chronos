import { Home } from './pages/Home'
// import { About } from './pages/About'
// import { NotFound } from './pages/NotFound'
import {TaskContextProvider} from "./contexts/TaskContext";

function App() {

    return (
        <>
            <TaskContextProvider>
                <Home />
            </TaskContextProvider>
        </>
    )
}

export default App
