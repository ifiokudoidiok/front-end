import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../state/actions";
import { imageBank } from "../utils/data";



const SingleUserStory = ({ getUserStories, userStories, userStoriesStatus }) => {

    useEffect(() => {
        getUserStories();
    }, []) // eslint-disable-line

    const { id } = useParams();
    const image = imageBank[id];

    return (
        <>  
            {
                userStoriesStatus && userStories.length > 0 ? (
                    <>
                        <img src={image} alt="Hiii" />
                        <h1>{userStories[id].title}</h1>
                        <p>{userStories[id].story}</p>
                    </>
                ) : (
                    <h1>Hiiii</h1>
                )
            }
        </>
    )
}

export default connect(state => state, actions)(SingleUserStory);