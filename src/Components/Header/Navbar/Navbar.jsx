import React from 'react';
import s from './Navbar.module.css';
import Dropdown from "./Dropdown/Dropdown";

const Navbar = () => {
    const dropdowns = [
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
                "Batch"
            ]
        },
        {
            id: 2,
            link: "Learn",
            links: [
                "Overview",
                "Quickstart",
                "Guides",
                "Blog"
            ]
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
                "Spring Initializr"
            ]
        },
        {
            id: 4,
            link: "Academy",
            links: [
                "Courses",
                "Get Certified"
            ]
        },
        {
            id: 5,
            link: "Support",
            links: [
                "Overview",
                "Security Advisories"
            ]
        },
        {
            id: 6,
            link: "Community",
            links: [
                "Overview",
                "Events",
                "Team"
            ]
        }
    ];

    return (
        <nav id={s["navbar"]}>
            <div className={s.nav__list}>
                {dropdowns.map(d => <Dropdown info={d} key={d.id}/>)}
            </div>
            <div id="scrollbar" className={s.scrollbar}></div>
        </nav>
    );
};

export default Navbar;