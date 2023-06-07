import axios from "axios";
import { login as loginAC } from "../redux/slices/auth";
import { setError } from "../redux/slices/auth";
import { login } from "../api/api";

jest.mock("axios");

describe("login", () => {
    it("successful login", async () => {
        const responseId = 1;
        const mockDispatch = jest.fn();
        axios.post.mockResolvedValue({ data: { id: responseId } });

        await login("admin", "1234")(mockDispatch);

        expect(axios.post).toHaveBeenCalledWith(
            "http://localhost:5000/api/auth/login",
            {
                username: "admin",
                password: "1234",
            },
        );
        expect(mockDispatch).toHaveBeenCalledWith(loginAC({ id: responseId }));
    });

    it("login failed with incorrect username", async () => {
        const responseMessage = "Invalid username or password";
        const mockDispatch = jest.fn();
        axios.post.mockRejectedValue({
            response: { data: { message: responseMessage } },
        });

        await login("admin1", "1234")(mockDispatch);

        expect(axios.post).toHaveBeenCalledWith(
            "http://localhost:5000/api/auth/login",
            {
                username: "admin1",
                password: "1234",
            },
        );
        expect(mockDispatch).toHaveBeenCalledWith(
            setError({ message: responseMessage }),
        );
    });

    it("login failed with incorrect password", async () => {
        const responseMessage = "Invalid username or password";
        const mockDispatch = jest.fn();
        axios.post.mockRejectedValue({
            response: { data: { message: responseMessage } },
        });

        await login("admin", "12345")(mockDispatch);

        expect(axios.post).toHaveBeenCalledWith(
            "http://localhost:5000/api/auth/login",
            {
                username: "admin",
                password: "12345",
            },
        );
        expect(mockDispatch).toHaveBeenCalledWith(
            setError({ message: responseMessage }),
        );
    });
});
