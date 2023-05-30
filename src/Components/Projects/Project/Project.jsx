import React from 'react';
import s from './Project.module.css';
import PropTypes from "prop-types";

const Project = ({info}) => {
    return (
        <article className={s.project__wrapper}>
            <a href="/" className={s.project__link}>
                <img src={info.imgURL} alt="" className={s.project__icon}></img>
                <div className={s.project__text}>
                    <h2 className={s.project__header}>{info.title}</h2>
                    <p className={s.project__description}>{info.text}</p>
                </div>
            </a>
        </article>
    );
};

Project.propTypes = {
    info: PropTypes.object
}

export default Project;