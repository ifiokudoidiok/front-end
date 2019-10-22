import React, { useEffect } from "react";
import { connect } from "react-redux"
import * as actions from '../state/actions';

import styled from 'styled-components';
import Header from '../components/Website/Header';


const Stories = ({ getUserStories, userStories }) => {

    useEffect(() => {
        getUserStories();
    }, []) // eslint-disable-line 

    return (
        <>
            <Header 
                height="60vh"
                title="Stories Page :)"  
                story="Welcome to the stories page. I sure i'm glad that you're here"
            />
            <StyledContainer>
                <ul>
                    {
                        userStories.map(({id, title, story}) => {
                            return (
                                <li key={id}>
                                    <h3>{title}</h3>
                                    <p>{story}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </StyledContainer>
        </>
    )
};

export default connect(state => state, actions)(Stories);

const StyledContainer = styled.main`
    max-width: ${props => props.theme.mediumMaxWidth};
    margin: 0 auto;
    padding: ${props => props.theme.containerWrap};
`