import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Auth/Register/Register";
import { ProtectedRoute } from "./tools/ProtectedRoute";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <>
                                <Header />
                                <Projects />
                            </>
                        </ProtectedRoute>
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
