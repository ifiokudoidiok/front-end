import React from "react";
import styled from 'styled-components';
import Slider from '../components/Website/Slider';
import Navigation from "../components/Website/Navigation";

const images = [
    "https://source.unsplash.com/1600x900/?refugees,refugee",
    "https://source.unsplash.com/1600x900/?refugees,refugee",
    "https://source.unsplash.com/1600x900/?refugees,refugee",
    "https://source.unsplash.com/1600x900/?refugees,refugee",
    "https://source.unsplash.com/1600x900/?refugees,refugee"
];

const Home = () => (
    <ParallaxContainer>
        <header className="is-home-page">
            <Navigation />
            <Slider
                options={{
                    autoPlay: 4000,
                    lazyLoad: true,
                    pauseAutoPlayOnHover: false,
                    wrapAround: true,
                    pageDots: false,
                    prevNextButtons: false
                }}
            >
                {
                    images.map((image, index) => (
                        <div style={{ width: '100%', height: '100%' }} key={index}>
                            <img src={image} data-flickity-lazyload={image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </header>
        <main>
            <h1>Hello World!</h1>
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

    header.is-home-page {
        width: 100vw;
        transform-origin: center top;
        transform: 
            translateZ(-1px) 
            scale(2);

        nav {
            z-index: 3;
            padding: 2rem calc((100vw - 1140px)/2);
    
            @media (max-width: 1140px) {
                padding: 2rem;
            }
        }
    }

    main {
        min-height: 100vh;
        background: white;
        transform: translateZ(0);
        padding: 2rem;
    }
`