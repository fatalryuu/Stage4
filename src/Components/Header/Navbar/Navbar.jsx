import React, {useEffect, useState} from 'react';
import s from './Navbar.module.css';
import Dropdown from "./Dropdown/Dropdown";
import PropTypes from "prop-types";

const Navbar = ({isChecked}) => {
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

    const [openedDropdownId, setOpenedDropdownId] = useState(null);

    const handleDropdownOpen = (dropdownId) => {
        setOpenedDropdownId(dropdownId);
    };

    const handleDropdownClose = () => {
        setOpenedDropdownId(null);
    };

    //close all dropdowns after menu is closed
    useEffect(() => setOpenedDropdownId(null), [isChecked]);

    return (
        <nav id={s["navbar"]}>
            <div className={s.nav__list}>
                {dropdowns.map(d => <Dropdown info={d} key={d.id} isOpened={openedDropdownId === d.id}
                                              onDropdownOpen={handleDropdownOpen}
                                              onDropdownClose={handleDropdownClose}/>)}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isChecked: PropTypes.bool
};

export default Navbar;