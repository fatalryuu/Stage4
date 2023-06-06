import React, {useState} from 'react';
import s from './Login.module.css';
import {useNavigate} from "react-router-dom";
import {login as loginAPI} from "../../api/api";
import {useDispatch} from "react-redux";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await dispatch(loginAPI(username, password));
            if (response.id) {
                navigate("/");
            } else {
                setError(response);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <h1 className={s.header}>Login</h1>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    className={s.username}
                    required={true}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    className={s.password}
                    required={true}
                />
                <p hidden={!error} className={s.error}>{error}</p>
                <input type="submit" className={s.submit} value="Login"/>
            </form>
        </div>
    );
};

export default Login;