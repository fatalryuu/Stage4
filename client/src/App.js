import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Auth/Register/Register";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        //
        if (!window.localStorage.getItem("Access Token")) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Projects />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
