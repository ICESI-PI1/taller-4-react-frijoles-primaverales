import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login.jsx";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Login/>;
    }

    return children;
};

export default ProtectedRoute;