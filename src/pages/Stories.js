import React, { useEffect } from "react";
import { connect } from "react-redux"
import * as actions from '../state/actions';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { imageBank } from "../utils/data";
import Header from '../components/Website/Header';
import Roller from "../components/LoadingIndicator/roller";


const Stories = ({ getUserStories, userStories, userStoriesStatus }) => {

    useEffect(() => {
        getUserStories();
    }, [userStories]) // eslint-disable-line

    return (
        <>
            <Header 
                height="60vh"
                title="Stories Page :)"  
                story="Welcome to the stories page. I sure i'm glad that you're here"
                image="https://images.unsplash.com/photo-1544006790-b3c81bd2fe74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            />
            <StyledContainer>
                {   
                    !userStoriesStatus ? (
                        <div className="loading-indicator">
                            <Roller isSiteWide={true} />
                        </div>
                    ) : (
                        <ul>
                            {
                                userStories.map(({id, title, story}, index) => {
                                    const image = imageBank[index];
                                    return (
                                        <li key={id}>
                                            <div className="card-content">
                                                <h3>{title}</h3>
                                                <p>{`${story.split(" ").splice(0, 15).join(" ")}...`}</p>
                                                <Link to={`/stories/${id}`}>Read full story <span>&#62;</span></Link>
                                            </div>
                                            <div className="card-image">
                                                <img src={image} alt="Randomized refugee resource from Unsplash" />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </StyledContainer>
        </>
    )
};

export default connect(state => state, actions)(Stories);

const StyledContainer = styled.main`
    max-width: ${props => props.theme.mediumMaxWidth};
    margin: 0 auto;
    padding: ${props => props.theme.containerWrap};
    width: 85vw;

    .loading-indicator {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        margin-bottom: 5rem;
        min-height: 300px;
        display: flex;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;

        &:last-of-type {
            margin-bottom: 0;
        }

        &:nth-of-type(2n) {
            flex-direction: row-reverse;

            .card-image img {
                border-top-left-radius: 5px;
                border-top-right-radius: 0;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 0;
            }
        }

        .card-content,
        .card-image {
            min-height: 300px;
            width: 50%;
            position: relative;

            img {
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                position: absolute;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }

        .card-image {
            background: ${props => props.theme.primaryDarkGrey}; 
        }

        .card-content {
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h3 {
                font-size: 2.5rem;
            }

            p {
                font-size: 1.6rem;
                margin-top: 1rem;
            }

            a {
                font-size: 1.4rem;
                margin-top: 2rem;
                color: ${props => props.theme.primaryColor};
                width: fit-content;
                display: inline-block;
                border-bottom: 3px solid transparent;

                &:hover {
                    border-bottom: 3px solid ${props => props.theme.primaryColor};
                }
            }
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;

            .card-content,
            .card-image {
                width: 100%;

                img {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
            }

            &:nth-of-type(2n) {
                flex-direction: column;

                .card-image img {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
            }
    }
`