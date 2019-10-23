import React from "react";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../../pages/Dashboard";
import ApprovedStories from "../../pages/ApprovedStories";
import SinglePendingStory from '../../pages/SinglePendingStory';


const DashboardRouter = () => (
    <>
        <PrivateRoute path="/admin" component={Dashboard} />
        <PrivateRoute path="/view-story/:id" component={SinglePendingStory} />
        <PrivateRoute path="/approved-stories" component={ApprovedStories} />
    </>
);

export default DashboardRouter
