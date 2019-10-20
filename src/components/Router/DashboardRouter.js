import React from "react";
import PrivateRoute from './PrivateRoute';

const DashboardRouter = () => (
    <>
        <PrivateRoute path="/admin" component={ResetPassword} />
        <PrivateRoute path="/approved-stories" component={NotFound} />
    </>
);

export default DashboardRouter