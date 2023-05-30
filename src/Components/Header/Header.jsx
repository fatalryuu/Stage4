import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import icon from '../../img/spring_icon.svg';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 900) {
            if (isChecked) {
                setIsChecked(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isChecked]);

    const handleLabelClick = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <header id={s["header"]}>
            <div className={s.header__container}>
                <a href="/" id={s["icon"]}>
                    <img src={icon} alt="" className={s.header__logo}></img>
                    <span className={s.spring__text}>spring</span>
                    <span className={s.by__spring__text}>by VMware Tanzu</span>
                </a>
                <input type="checkbox" id={s["burger"]} checked={isChecked}
                       onChange={(e) => setIsChecked(e.target.checked)}>

                </input>
                <label htmlFor="burger" onClick={handleLabelClick}></label>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;