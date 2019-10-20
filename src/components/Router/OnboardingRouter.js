import React from "react";
import { Route } from "react-router-dom";

const OnboardingRouter = () => (
    <>
        <Route path="/login" component={Login} />
        <Route path="/register" component={ResetPassword} />
    </>
);

export default OnboardingRouter