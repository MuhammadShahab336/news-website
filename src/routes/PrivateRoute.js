import React from 'react';
import {Navigate, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => state.user)
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" replace={true} />
};

export default PrivateRoute;