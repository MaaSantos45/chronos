import {TaskContextProvider} from "./contexts/TaskContext";
import {MessagesToast} from "./components/MessagesToast";
import {MainRouter} from "./routers/MainRouter";

function App() {

    return (
        <>
            <TaskContextProvider>
                <MessagesToast />

                <MainRouter />

            </TaskContextProvider>
        </>
    )
}

export default App
