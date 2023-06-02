import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Projects/>
                <Routes>
                    {/*<Route path="/" element={}/>*/}
                    {/*<Route path="/login" element={}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
