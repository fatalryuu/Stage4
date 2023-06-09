import React, { useState } from "react";
import s from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { register as registerAPI } from "../../../api/api";
import { useDispatch } from "react-redux";
import Input from "../Input/Input";

const Register = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await dispatch(
                registerAPI(
                    username,
                    password,
                    repeatPassword,
                    firstName,
                    lastName,
                    age,
                ),
            );
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
                <h1 className={s.header}>Registration</h1>
                <Input
                    type="text"
                    value={username}
                    placeholder="Enter your username"
                    onChange={setUsername}
                />
                <Input
                    type="text"
                    value={firstName}
                    placeholder="Enter your first name"
                    onChange={setFirstName}
                />
                <Input
                    type="text"
                    value={lastName}
                    placeholder="Enter your last name"
                    onChange={setLastName}
                />
                <Input
                    type="number"
                    value={age}
                    placeholder="Enter your age"
                    onChange={setAge}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Create a password"
                    onChange={setPassword}
                />
                <Input
                    type="password"
                    value={repeatPassword}
                    placeholder="Confirm a password"
                    onChange={setRepeatPassword}
                />
                {error && <p className={s.error}>{error}</p>}
                <input type="submit" className={s.submit} value="Register" />
                <div className={s.footer}>
                    <span>Already have an account? </span>
                    <NavLink to="/login">Login here</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Register;
