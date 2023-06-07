import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slices/navbar";
import projectsSlice from "./slices/projects";
import authSlice from "./slices/auth";

const store = configureStore({
    reducer: {
        auth: authSlice,
        navbar: navbarSlice,
        projects: projectsSlice,
    },
});

export default store;
