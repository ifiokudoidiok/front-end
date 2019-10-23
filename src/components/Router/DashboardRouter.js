import React from "react";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../../pages/Dashboard";
import ApprovedStories from "../../pages/ApprovedStories";

const DashboardRouter = () => {
    return (
        <>
            <PrivateRoute path="/admin" component={Dashboard} />
            <PrivateRoute path="/approved-stories" component={ApprovedStories} />
        </>
    );
}

export default DashboardRouter