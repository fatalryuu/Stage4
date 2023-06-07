import React from "react";
import s from "./Project.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Project = ({ info }) => {
    return (
        <article className={s.project__wrapper}>
            <NavLink to="/" className={s.project__link}>
                <img
                    src={`http://localhost:5000/images${info.imgURL}`}
                    alt=""
                    className={s.project__icon}
                ></img>
                <div className={s.project__text}>
                    <h2 className={s.project__header}>{info.title}</h2>
                    <p className={s.project__description}>{info.text}</p>
                </div>
            </NavLink>
        </article>
    );
};

Project.propTypes = {
    info: PropTypes.object,
};

export default Project;
