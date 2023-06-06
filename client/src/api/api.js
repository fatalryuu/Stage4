import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const login = async (username, password) => {
    try {
        const response = await instance.post("auth/login", {
            username,
            password
        });

        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
}