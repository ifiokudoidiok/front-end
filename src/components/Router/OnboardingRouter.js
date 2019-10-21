import React from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/LoginComponents/Login";
import Register from "../../pages/Register";

const OnboardingRouter = () => (
    <>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </>
);

export default OnboardingRouter