import React from "react";
import s from "./Header.module.css";

const Header = () => {
    const description =
        "From configuration to security, web apps to big " +
        "data—whatever the infrastructure needs of your application may be, there " +
        "is a Spring Project to help you build it. Start small and use just what you " +
        "need—Spring is modular by design.";

    return (
        <div className={s.projects__header}>
            <h1>Projects</h1>
            <div className={s.description}>{description}</div>
        </div>
    );
};

export default Header;
