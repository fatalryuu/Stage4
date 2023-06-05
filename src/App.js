import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

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
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
