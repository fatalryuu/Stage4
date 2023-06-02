import React, {useEffect, useState} from 'react';
import s from './Navbar.module.css';
import Dropdown from "./Dropdown/Dropdown";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const Navbar = ({isChecked}) => {
    const dropdowns = useSelector(state => state.navbar.dropdowns);

    const [openedDropdownId, setOpenedDropdownId] = useState(null);

    const handleDropdownOpen = (dropdownId) => {
        setOpenedDropdownId(dropdownId);
    };

    const handleDropdownClose = () => {
        setOpenedDropdownId(null);
    };

    //close all dropdowns after menu is closed
    useEffect(() => setOpenedDropdownId(null), [isChecked]);

    return (
        <nav id={s["navbar"]}>
            <div className={s.nav__list}>
                {dropdowns.map(d => <Dropdown info={d} key={d.id} isOpened={openedDropdownId === d.id}
                                              onDropdownOpen={handleDropdownOpen}
                                              onDropdownClose={handleDropdownClose}/>)}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isChecked: PropTypes.bool
};

export default Navbar;