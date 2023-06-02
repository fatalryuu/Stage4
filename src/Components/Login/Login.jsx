import React from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className={s.wrapper}>
            <input type="text"/>
            <input type="text"/>
            <NavLink to="/">Login</NavLink>
        </div>
    );
};

export default Login;