import React from "react";
import styled from 'styled-components';
import Header from '../components/Website/Header';


const Home = () => (
    <ParallaxContainer>
        <Header 
            height="100vh"
            title="Home Page :)"  
            description="Welcome to the home page. I sure i'm glad that you're here"
        />
        <main>
            <h1>Home Page</h1>
        </main>
    </ParallaxContainer>
);

export default Home;

const ParallaxContainer = styled.div`
    height: 100vh;
    max-height: 100%;
    overflow-x: hidden;
    perspective: 1px;
    perspective-origin: center top;
    transform-style: preserve-3d;

    header {
        width: 100vw;
        background: none;
        background-size: cover;
        background-position: center center;
        position: relative;
        vertical-align: top;
        transform-origin: center top;
        transform: 
            translateZ(-1px) 
            scale(2);
    }

    main {
        min-height: 100vh;
        background: white;
        transform: translateZ(0);
        padding: 2rem;
    }
`