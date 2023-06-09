import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { login as loginAC, setError } from "../redux/slices/auth";
import { addProjects } from "../redux/slices/projects";

const refreshAuthLogin = async failedRequest => {
    console.log("tut1");
    try {
        const tokenRefreshResponse = await axios.post(
            "http://localhost:5000/api/auth/token",
            {
                refreshToken: window.localStorage.getItem("Refresh Token"),
            },
        );
        console.log("tut2");
        localStorage.setItem(
            "Access Token",
            tokenRefreshResponse.data.accessToken,
        );
        failedRequest.response.config.headers["Authorization"] =
            "Bearer " + tokenRefreshResponse.data.accessToken;
        return Promise.resolve();
    } catch (error) {
        window.localStorage.removeItem("Access Token");
        window.localStorage.removeItem("Refresh Token");
        window.location.reload();
        return Promise.reject(error);
    }
};

createAuthRefreshInterceptor(axios, refreshAuthLogin, {
    statusCodes: [403],
});

export const register = (
    username,
    password,
    repeatPassword,
    firstName,
    lastName,
    age,
) => {
    return async dispatch => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    username,
                    password,
                    repeatPassword,
                    firstName,
                    lastName,
                    age,
                },
            );
            window.localStorage.setItem(
                "Access Token",
                response.data.accessToken,
            );
            window.localStorage.setItem(
                "Refresh Token",
                response.data.refreshToken,
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
            window.localStorage.setItem(
                "Access Token",
                response.data.accessToken,
            );
            window.localStorage.setItem(
                "Refresh Token",
                response.data.refreshToken,
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
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                            "Access Token",
                        )}`,
                    },
                },
            );

            dispatch(addProjects({ projects: response.data }));
            return response.data;
        } catch (error) {
            if (error.response) {
                return error.response.data.message;
            }
            return error.message;
        }
    };
};
