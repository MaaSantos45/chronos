import { Home } from './pages/Home'
// import { About } from './pages/About'
// import { NotFound } from './pages/NotFound'
import {TaskContextProvider} from "./contexts/TaskContext";
import {MessagesToast} from "./components/MessagesToast";

function App() {

    return (
        <>
            <TaskContextProvider>
                <MessagesToast />
                <Home />
            </TaskContextProvider>
        </>
    )
}

export default App
