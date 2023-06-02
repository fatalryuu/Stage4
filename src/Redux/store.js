import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from "./slices/navbar";
import projectsSlice from "./slices/projects";

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        projects: projectsSlice
    }
});

export default store;