import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: null,
        isAuth: false,
    },
    reducers: {
        login: (state, action) => {
            const { id } = action.payload;
            state.id = id;
            state.isAuth = true;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
