import React from 'react';
import s from "./Search.module.css";
import PropTypes from "prop-types";

const Search = ({setSearchField}) => {
    let timeoutId;

    const handleSearch = (e) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setSearchField(e.target.value), 300);
    }

    return (
        <div className={s.search__wrapper}>
            <label htmlFor="search"></label>
            <input type="search" id={s["search"]} placeholder="Search..." onChange={handleSearch} autoComplete="off"></input>
        </div>
    );
};

Search.propTypes = {
    setSearchField: PropTypes.func
}

export default Search;