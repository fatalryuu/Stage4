import React, {useState} from 'react';
import s from './Dropdown.module.css';
import PropTypes from "prop-types";

const Dropdown = ({info}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleButtonClick = () => {
        setIsContentVisible((prevValue) => !prevValue);
    };

    const configureLinks = (text, index) => {
        if ((info.id === 3 && index === 9) || (info.id === 3 && index === 10)) {
            if (index === 9) {
                return <a href="/" id={s["blue"]} key={Math.random() * 1000}>{text}</a>;
            } else {
                return <span className={s.projects__text__tools} key={Math.random() * 1000}>{text}</span>;
            }
        } else {
            return <a href="/" key={Math.random() * 1000}>{text}</a>;
        }
    }

    return (
        <div className={s.dropdown}>
            <button className={`${s.dropdown__button} ${isContentVisible ? s.up : ''}`} onClick={handleButtonClick}>{info.link}</button>
            <div className={`${s.dropdown__content} ${isContentVisible ? s.visible : s.invisible}`}>
                {info.links.map((l, index) => configureLinks(l, index))}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    info: PropTypes.object
}

export default Dropdown;