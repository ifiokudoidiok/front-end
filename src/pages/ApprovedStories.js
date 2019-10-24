import React, { useEffect } from "react";
import { connect } from "react-redux"
import * as actions from '../state/actions';

import styled from 'styled-components';
import Roller from "../components/LoadingIndicator/roller";


const ApprovedStories = ({ getUserStories, userStories, userStoriesStatus, deleteStory }) => {

    useEffect(() => {
        getUserStories();
    }, [userStories]) // eslint-disable-line

    return (
        <StyledContainer>
            {   
                !userStoriesStatus ? (
                    <div className="loading-indicator indicator">
                        <Roller isSiteWide={true} />
                    </div>
                ) : (
                    <div className='approvedSection'>
                        <h1 className='intro'>Approved Stories</h1>
                        {
                            userStories.map(person => {
                                return (
                                    <div className="approvedCards" key={person.id}>
                                        <h3><i>{person.title}</i></h3>
                                        <p>{person.story}</p>
                                        <div className='btnDiv'>
                                            <button onClick={() => deleteStory(person.id)}className='dashboard-button'>
                                                Delete Story
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </StyledContainer>
    )
};

export default connect(state => state, actions)(ApprovedStories);
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    .approvedSection{
        max-width:1000px;
        width:100%;
        background-color: whitesmoke;
        margin: 0 auto;
    }

    .approvedCards {
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
            0 2px 4px rgba(0, 0, 0, 0.24);  
        background-color: #FFEBCD;
        margin: 10px 10px 20px 10px;
    }

    .btnDiv {
        display: flex;
        justify-content: flex-end;
    }

    .dashboard-button {
        margin:10px 5px 5px 5px;
        padding: 5px;
        border-radius:10px;
        border: 1px solid gray;
        background-color:lightgray
    }

    .dashboard-button:hover {
        background-color: #90EE90;
        font-size: 13.5px;
    }

    .intro {
        font-size: 3rem;
        text-shadow: 1px 1px 1px lightblue, 
        3px 3px 5px darkgray;
        text-align: center;
    }
`;