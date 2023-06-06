import axios from "axios";
import {login as loginAC} from "../redux/slices/auth";
import {addProjects} from "../redux/slices/projects";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await instance.post("auth/login", {
                username,
                password
            });
            dispatch(loginAC({id: response.data.id}));

            return response.data;
        } catch (error) {
            return error.response.data.message;
        }
    }
}

export const getProjects = () => {
    return async (dispatch) => {
        try {
            const response = await instance.get("data/projects");

            dispatch(addProjects({projects: response.data}));
            return response.data;
        } catch (error) {
            return error.response.data.message;
        }
    }
}