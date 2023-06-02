import React, {useEffect, useState} from 'react';
import s from './Dropdown.module.css';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Dropdown = ({info, isOpened, onDropdownOpen, onDropdownClose}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleButtonClick = () => {
        if (isOpened) {
            onDropdownClose();
        } else {
            onDropdownOpen(info.id);
        }
        if (window.innerWidth <= 900) {
            setIsContentVisible((prevValue) => !prevValue);
        }
    };

    useEffect(() => {
        if (!isOpened) {
            setIsContentVisible(false);
        }
    }, [isOpened])

    const configureLinks = (text, index) => {
        if ((info.id === 3 && index === 9) || (info.id === 3 && index === 10)) {
            if (index === 9) {
                return <NavLink to="/" id={s["blue"]} key={Math.random() * 1000}>{text}</NavLink>;
            } else {
                return <span className={s.projects__text__tools} key={Math.random() * 1000}>{text}</span>;
            }
        } else {
            return <NavLink to="/" key={Math.random() * 1000}>{text}</NavLink>;
        }
    }

    return (
        <div className={s.dropdown}>
            <button className={`${s.dropdown__button} ${isContentVisible && isOpened ? s.up : ''}`} onClick={handleButtonClick}>{info.link}</button>
            <div className={`${s.dropdown__content} ${isContentVisible && isOpened ? s.visible : s.invisible}`}>
                {info.links.map((l, index) => configureLinks(l, index))}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    info: PropTypes.object,
    isOpened: PropTypes.bool,
    onDropdownOpen: PropTypes.func,
    onDropdownClose: PropTypes.func,
};

export default Dropdown;