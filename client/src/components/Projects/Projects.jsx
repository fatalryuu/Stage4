import React, { useEffect } from "react";
import s from "./Projects.module.css";
import Header from "./Header/Header";
import ProjectsList from "./ProjectsList/ProjectsList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProjects } from "../../api/api";

const Projects = () => {
    const projects = useSelector(state => state.projects.list);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProjects() {
            await dispatch(getProjects());
        }

        if (projects.length === 0) {
            loadProjects();
        }
    }, []);

    return (
        <section id={s["projects"]}>
            <Header />
            <ProjectsList projects={projects} />
        </section>
    );
};

export default Projects;
