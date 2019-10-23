import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../state/actions";
import { imageBank } from "../utils/data";



const SingleUserStory = ({ getUserStories, userStories, userStoriesStatus, ...props }) => {

    const [ currentStory, setCurrentStory ] = useState([]);
    
    useEffect(() => {
        getUserStories();
    }, []) // eslint-disable-line

    useEffect(() => {
        if(userStoriesStatus) setCurrentStory(userStories.reverse())
    }, [userStoriesStatus]) // eslint-disable-line

    const image = imageBank.reverse()[props.match.params.id - 1];

    return (
        <>  
            {
                userStoriesStatus && currentStory.length > 0 ? (
                    <>
                        <img src={image} alt="Hiii" />
                        <h1>{currentStory[props.match.params.id - 1].title}</h1>
                        <p>{currentStory[props.match.params.id - 1].story}</p>
                    </>
                ) : (
                    <h1>Hiiii</h1>
                )
            }
        </>
    )
}

export default connect(state => state, actions)(withRouter(SingleUserStory));