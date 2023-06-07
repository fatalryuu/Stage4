import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: null,
    },
    reducers: {
        login: (state, action) => {
            const { id } = action.payload;
            state.id = id;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
