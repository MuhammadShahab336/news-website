import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => state.auth)
    return isAuthenticated ? <Navigate to="/" replace={true} /> : <Component {...rest} />
};

export default PublicRoute;