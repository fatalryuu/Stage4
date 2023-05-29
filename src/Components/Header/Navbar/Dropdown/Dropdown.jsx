import React from 'react';
import s from './Dropdown.module.css';

const Dropdown = ({info}) => {

    const configureLinks = (text, index) => {
        if ((info.id === 3 && index === 9) || (info.id === 3 && index === 10)) {
            if (index === 9) {
                return <a href="/" id={s["blue"]} key={info.id}>{text}</a>;
            } else {
                return <span className={s.projects__text__tools} key={info.id}>{text}</span>;
            }
        } else {
            return <a href="/" key={info.id}>{text}</a>;
        }
    }

    return (
        <div className={s.dropdown}>
            <button className={s.dropdown__button}>{info.link}</button>
            <div className={s.dropdown__content}>
                {info.links.map((l, index) => configureLinks(l, index))}
            </div>
        </div>
    );
};

export default Dropdown;