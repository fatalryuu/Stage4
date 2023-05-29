import React from 'react';
import s from "./ProjectsList.module.css";
import Project from "../Project/Project";
import Search from "./Search/Search";
import PropTypes from "prop-types";

const ProjectsList = ({projects}) => {
    const projectsArray = projects.map(p => <Project info={p} key={p.id}/>);

    return (
        <div className={s.projects__list}>
            <Search projects={projects}/>
            <p id={s["no-results"]} style={{display: "none"}}>No results</p>
            <div className={s.projects__table}>{projectsArray}</div>
        </div>
    );
};

ProjectsList.propTypes = {
    projects: PropTypes.array
}

export default ProjectsList;