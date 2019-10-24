import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../state/actions/index';



const Dashboard = ({ pendingStories,  getPendingStories, approveStory }) => {

	useEffect(() => {
		getPendingStories();
	}, [pendingStories]); // eslint-disable-line

	return (
        <StyledContainer>
            <h2 className='intro'>Pending Stories</h2>
            {
                pendingStories.map((person) => {
                    return (
                        <div key={person.id} className='pendingCards'>
                            <h3 ><i>{person.title}</i></h3>
                            <p>{person.story}</p>
                            <div className='btnDiv'>
                                <button onClick={() => approveStory(person.id,{...person, highlight:null})} className='dashboard-button'>
                                    Approve Story
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </StyledContainer>	            		
	);
};

export default connect( state => state, actions)(Dashboard);

const StyledContainer = styled.div`
    width:100%;
    background-color: whitesmoke;
    margin: 0 auto;

    .pendingCards {
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
  `
