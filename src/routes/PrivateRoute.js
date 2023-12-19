import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => state.auth)
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" replace={true} />
};

export default PrivateRoute;