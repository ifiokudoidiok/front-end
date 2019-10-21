import React from "react";
import { Route } from "react-router-dom";
import Home from '../../pages/Home';
import Stories from '../../pages/Stories';
import SubmitStory from '../../pages/SubmitStory';


const WebsiteRouter = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route path="/stories" component={Stories} />
        <Route path="/submit-story" component={SubmitStory} />
    </>
);

export default WebsiteRouter