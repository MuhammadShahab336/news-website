import React, {lazy} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";

const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Profile = lazy(() => import('../pages/Profile'));
const Home = lazy(() => import('../pages/Home'));


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            index={true}
                            element={<PrivateRoute component={Home} />}
                        />
                        <Route
                            path="/profile"
                            element={<PrivateRoute component={Profile} />}
                        />
                        <Route
                            path="/signin"
                            element={<SignIn />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
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