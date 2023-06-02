import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from "./slices/navbar";
import projectsSlice from "./slices/projects";
import usersSlice from "./slices/users";

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        projects: projectsSlice,
        users: usersSlice
    }
});

export default store;