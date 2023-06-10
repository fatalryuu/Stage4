import React, { useState } from "react";
import s from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ type, value, placeholder, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={s.wrapper}>
            <input
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={s.input}
                required
            />
            <label
                className={`${s.label} ${
                    isFocused || value ? s.labelFocused : ""
                }`}
            >
                {placeholder}
            </label>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
