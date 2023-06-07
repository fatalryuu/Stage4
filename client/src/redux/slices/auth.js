import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: null,
        isAuth: false,
        errorMessage: "",
    },
    reducers: {
        login: (state, action) => {
            const { id } = action.payload;
            state.id = id;
            state.isAuth = true;
        },
        setError: (state, action) => {
            const { message } = action.payload;
            state.errorMessage = message;
        },
        resetError: state => {
            state.errorMessage = "";
        },
    },
});

export const { login, setError, resetError } = authSlice.actions;
export default authSlice.reducer;
