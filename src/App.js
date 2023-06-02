import React, {useEffect} from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./Components/Login/Login";
// import NotFound from "./Components/NotFound/NotFound";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login")
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<><Header/><Projects/></>}/>
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
