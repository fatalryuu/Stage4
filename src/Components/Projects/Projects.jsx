import React from 'react';
import s from './Projects.module.css';
import Header from "./Header/Header";
import ProjectsList from "./ProjectsList/ProjectsList";
import {useSelector} from "react-redux";

const Projects = () => {
    const projects = useSelector(state => state.projects.list);

    return (
        <section id={s["projects"]}>
            <Header/>
            <ProjectsList projects={projects}/>
        </section>
    );
};

export default Projects;