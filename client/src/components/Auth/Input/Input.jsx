import React from "react";
import s from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ type, value, placeholder, onChange }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            className={s.input}
            required={true}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
