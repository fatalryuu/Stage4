import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from "./slices/navbar";

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
    }
});

export default store;