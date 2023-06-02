import {createSlice} from "@reduxjs/toolkit";
import spring_boot from "../../img/spring-boot.svg";
import spring_framework from "../../img/spring-framework.svg";
import spring_data from "../../img/spring-data.svg";
import spring_cloud from "../../img/spring-cloud.svg";
import spring_data_flow from "../../img/spring-data-flow.svg";
import spring_security from "../../img/spring-security.svg";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        list: [
            {
                id: 1,
                imgURL: spring_boot,
                title: "Spring Boot",
                text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
            },
            {
                id: 2,
                imgURL: spring_framework,
                title: "Spring Framework",
                text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
            },
            {
                id: 3,
                imgURL: spring_data,
                title: "Spring Data",
                text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
            },
            {
                id: 4,
                imgURL: spring_cloud,
                title: "Spring Cloud",
                text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
            },
            {
                id: 5,
                imgURL: spring_data_flow,
                title: "Spring Cloud Data Flow",
                text: "Provides an orchestration service for composable data microservice applications on modern runtimes."
            },
            {
                id: 6,
                imgURL: spring_security,
                title: "Spring Security",
                text: "Protects your application with comprehensive and extensible authentication and authorization support."
            }
        ]
    },
    reducers: {

    }
});

export default projectsSlice.reducer;