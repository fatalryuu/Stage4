import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children }) => {
    const token = window.localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element,
};
