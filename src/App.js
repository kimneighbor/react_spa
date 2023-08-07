import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // react-router-dom에서 Routes, Route, Link를 import합니다.
import Home from "./pages/Home"; // Home 컴포넌트를 import합니다.
import About from "./pages/About"; // About 컴포넌트를 import합니다.
import Counter from "./pages/Counter"; // Counter 컴포넌트를 import합니다.
import Calculator from "./pages/Calculator"; // Calculator 컴포넌트를 import합니다.
import Calendar from "./pages/Calendar"; // Calendar 컴포넌트를 import합니다.
import Lotto from "./pages/Lotto"; //

function App() {
    return (
        <div className="App">
            <nav>
                {/* 각 페이지로 이동할 수 있는 링크를 생성합니다. */}
                <Link to={`/`}>Home</Link> | <Link to={`/about`}>About</Link> |{" "}
                <Link to={`/counter`}>Counter</Link> |{" "}
                <Link to={`/calculator`}>Calculator</Link> |{" "}
                <Link to={`/calendar`}>Calendar</Link> |{" "}
                <Link to={`/Lotto`}>Lotto</Link>
            </nav>

            <Routes>
                {/* Route 컴포넌트를 사용하여 URL 경로와 해당 경로에서 보여줄 컴포넌트를 설정합니다. */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/counter"} element={<Counter />} />
                <Route path={"/calculator"} element={<Calculator />} />
                <Route path={"/calendar"} element={<Calendar />} />
                <Route path={"/lotto"} element={<Lotto />} />
            </Routes>
        </div>
    );
}

export default App;
