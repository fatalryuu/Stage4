import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        dropdowns: [
            {
                id: 1,
                link: "Why Spring",
                links: [
                    "Overview",
                    "Microservices",
                    "Reactive",
                    "Event Driven",
                    "Cloud",
                    "Web Applications",
                    "Serverless",
                    "Batch",
                ],
            },
            {
                id: 2,
                link: "Learn",
                links: ["Overview", "Quickstart", "Guides", "Blog"],
            },
            {
                id: 3,
                link: "Projects",
                links: [
                    "Overview",
                    "Spring Boot",
                    "Spring Framework",
                    "Spring Cloud",
                    "Spring Cloud Data Flow",
                    "Spring Data",
                    "Spring Integration",
                    "Spring Batch",
                    "Spring Security",
                    "View all projects",
                    "Development tools",
                    "Spring Tools4",
                    "Spring Initializr",
                ],
            },
            {
                id: 4,
                link: "Academy",
                links: ["Courses", "Get Certified"],
            },
            {
                id: 5,
                link: "Support",
                links: ["Overview", "Security Advisories"],
            },
            {
                id: 6,
                link: "Community",
                links: ["Overview", "Events", "Team"],
            },
        ],
    },
    reducers: {},
});

export default navbarSlice.reducer;
