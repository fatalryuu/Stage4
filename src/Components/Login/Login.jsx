import React, {useState} from 'react';
import s from './Login.module.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// import {addUser} from "../../Redux/slices/users";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users);
    // const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.find(user => user.username === username && user.password === password)) {
            navigate("/");
        } else {
            setIsError(true);
        }
    }

    return (
        <div className={s.wrapper}>
            {/*<button onClick={() => dispatch(addUser({username: "root", password: "root"}))}>Add</button>*/}
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
                <p hidden={!isError} className={s.error}>Incorrect username or password</p>
                <input type="submit" className={s.submit} value="Login"/>
            </form>
        </div>
    );
};

export default Login;