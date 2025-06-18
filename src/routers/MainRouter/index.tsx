import {BrowserRouter, Route, Routes, useLocation} from "react-router";
import {Home} from "../../pages/Home";
import {About} from "../../pages/About";
import {NotFound} from "../../pages/NotFound";
import {useEffect} from "react";

function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [pathname]);

    return null
}

export function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about/"} element={<About />} />

                    <Route path={"*"} element={<NotFound />} />
                </Routes>

                <ScrollTop />
            </BrowserRouter>
        </>
    )
}