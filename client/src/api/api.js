import axios from "axios";
import { login as loginAC, setError } from "../redux/slices/auth";
import { addProjects } from "../redux/slices/projects";

export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    username,
                    password,
                },
            );
            dispatch(loginAC({ id: response.data.id }));

            return response.data;
        } catch (error) {
            if (error.response) {
                dispatch(setError({ message: error.response.data.message }));
                return error.response.data;
            } else {
                dispatch(setError({ message: "Server error" }));
                return { message: "Server error" };
            }
        }
    };
};

export const getProjects = () => {
    return async dispatch => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/data/projects",
            );

            dispatch(addProjects({ projects: response.data }));
            return response.data;
        } catch (error) {
            return error.response.data.message;
        }
    };
};
