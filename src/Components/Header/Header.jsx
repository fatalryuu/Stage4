import React from 'react';
import s from './Header.module.css';
import icon from '../../img/spring_icon.svg';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header id={s["header"]}>
            <div className={s.header__container}>
                <a href="/" id={s["icon"]}>
                    <img src={icon} alt="" className={s.header__logo}></img>
                    <span className={s.spring__text}>spring</span>
                    <span className={s.by__spring__text}>by VMware Tanzu</span>
                </a>
                <input type="checkbox" id={s["burger"]}></input>
                <label htmlFor="burger"></label>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;