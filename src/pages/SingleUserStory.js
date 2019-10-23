import React, { useState, useEffect } from "react";
import * as actions from "../state/actions";
import styled from 'styled-components';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { imageBank } from "../utils/data";
import Navigation from "../components/Website/Navigation";



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
        <StyledContainer>  
            <Navigation noheader />
            {
                userStoriesStatus && currentStory.length > 0 ? (
                    <main>
                        <h1>{currentStory[props.match.params.id - 1].title}</h1>
                        <div className="featured-image">
                            <img src={image} alt={currentStory[props.match.params.id - 1].title} />
                        </div>
                        <p>{currentStory[props.match.params.id - 1].story}</p>
                    </main>
                ) : (
                    <h1>Hiiii</h1>
                )
            }
        </StyledContainer>
    )
}

export default connect(state => state, actions)(withRouter(SingleUserStory));

const StyledContainer = styled.main`
    padding: 2rem;

    main {
        max-width: ${props => props.theme.mediumMaxWidth};
        margin: 7rem auto 5rem;

        h1 {
            font-size: 5rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.7rem;
            line-height: 1.58;
            margin: 0 auto;
            margin-top: 3rem;
            max-width: 500px;
        }

        .featured-image {
            height: 500px;
            position: relative;

            img {
                object-position: center;
            }
        }
    }
`