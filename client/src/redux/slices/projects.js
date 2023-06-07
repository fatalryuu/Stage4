import { createSlice } from "@reduxjs/toolkit";
// import spring_boot from "../../img/spring-boot.svg";
// import spring_framework from "../../img/spring-framework.svg";
// import spring_data from "../../img/spring-data.svg";
// import spring_cloud from "../../img/spring-cloud.svg";
// import spring_data_flow from "../../img/spring-data-flow.svg";
// import spring_security from "../../img/spring-security.svg";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        list: [],
    },
    reducers: {
        addProjects: (state, action) => {
            const { projects } = action.payload;
            state.list = [...projects];
        },
    },
});

export const { addProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
