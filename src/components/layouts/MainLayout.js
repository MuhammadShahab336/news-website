import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "./index";

const MainLayout = () => {
    const isAuthenticated = true
    return isAuthenticated ? (
        <>
            <Header />
            <Outlet />
        </>
    ) : (
        <>
            <Outlet />
        </>
    )
};

export default MainLayout;