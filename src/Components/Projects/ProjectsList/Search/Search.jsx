import React from 'react';
import s from "./Search.module.css";
import PropTypes from "prop-types";

const Search = ({projects}) => {
    let timeoutId;

    const handleSearch = (e) => {
        // clearTimeout(timeoutId);
        //
        // timeoutId = setTimeout(() => {
        //     const value = e.target.value.toLowerCase();
        //     let hasResults = false;
        //
        //     projects.forEach(project => {
        //         const isVisible = project.title.toLowerCase().includes(value) || project.text.toLowerCase().includes(value);
        //         project.card.classList.toggle("hidden", !isVisible);
        //         if (isVisible) {
        //             hasResults = true;
        //         }
        //     });
        //
        //     if (hasResults) {
        //         noResultsMessage.style.display = "none";
        //     } else {
        //         noResultsMessage.style.display = "block";
        //     }
        // }, 300);
    }

    return (
        <div className={s.search__wrapper}>
            <label htmlFor="search"></label>
            <input type="search" id={s["search"]} placeholder="Search..." onChange={handleSearch} autoComplete="off"></input>
        </div>
    );
};

Search.propTypes = {
    projects: PropTypes.array
}

export default Search;