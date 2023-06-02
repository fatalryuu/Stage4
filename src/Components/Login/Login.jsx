import React, {useState} from 'react';
import s from './Login.module.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// import {addUser} from "../../Redux/slices/users";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users);
    // const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.find(user => user.username === username && user.password === password)) {
            navigate("/");
        }
    }

    return (
        <div className={s.wrapper}>
            {/*<button onClick={() => dispatch(addUser({username: "root", password: "root"}))}>Add</button>*/}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={s.username}
                    required={true}
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={s.password}
                    required={true}
                />
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;