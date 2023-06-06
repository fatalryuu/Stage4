import React, {useState} from 'react';
import s from "./ProjectsList.module.css";
import Project from "../Project/Project";
import Search from "./Search/Search";
import PropTypes from "prop-types";

const ProjectsList = ({projects}) => {
    const [searchField, setSearchField] = useState("");

    const filteredProjects = projects.filter(
        project => {
            return (
                project
                    .title
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                project
                    .text
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    return (
        <div className={s.projects__list}>
            <Search setSearchField={setSearchField}/>
            <p id={s["no-results"]} style={filteredProjects.length === 0 ? {display: "block"} : {display: "none"}}>No results</p>
            <div className={s.projects__table}>
                {filteredProjects.map(p => <Project info={p} key={p.id}/>)}
            </div>
        </div>
    );
};

ProjectsList.propTypes = {
    projects: PropTypes.array
}

export default ProjectsList;