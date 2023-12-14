import React from 'react';
import {Navigate, Route} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = true
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace={true} />
};

export default PrivateRoute;