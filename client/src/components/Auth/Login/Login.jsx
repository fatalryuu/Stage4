import React, { useState } from "react";
import s from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../../api/api";
import { useDispatch } from "react-redux";
import Input from "../Input/Input";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await dispatch(loginAPI(username, password));
            if (response.id) {
                navigate("/");
            } else {
                setError(response.message);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <h1 className={s.header}>Login</h1>
                <Input
                    type="text"
                    value={username}
                    placeholder="Enter your username"
                    onChange={setUsername}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Confirm a password"
                    onChange={setPassword}
                />
                {error && <p className={s.error}>{error}</p>}
                <input type="submit" className={s.submit} value="Login" />
                <div className={s.footer}>
                    <span>Don&apos;t have an account? </span>
                    <NavLink to="/register">Register here</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;
