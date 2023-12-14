import React, {lazy} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";

const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Home = lazy(() => import('../pages/Home'));

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} >
                        <Route
                            path="/signin"
                            element={<SignIn />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
                        />
                        <Route
                            index={true}
                            element={<Home />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace={true} />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;