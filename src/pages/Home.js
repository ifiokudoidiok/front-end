import React from "react";
import styled from 'styled-components';
import { slides } from '../utils/data';
import Slider from '../components/Website/Slider';
import Navigation from "../components/Website/Navigation";


const Home = () => (
    <ParallaxContainer>
        <header className="is-home-page">
            <Navigation />
            <Slider
                options={{
                    autoPlay: 10000,
                    lazyLoad: true,
                    pauseAutoPlayOnHover: false,
                    wrapAround: true,
                    pageDots: false,
                    prevNextButtons: false
                }}
            >
                {
                    slides.map(({ image, title, story }, index) => (
                        <div style={{ width: '100%', height: '100%' }} key={index}>
                            <div className="slider-image">
                                <img src={image} data-flickity-lazyload={image} alt="" />
                            </div>
                            <div className="slider-content">
                                <h1>{title}</h1>
                                <p>{story}</p>
                            </div>
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

        .slider-image {
            width: 100%;
            height: 100%;

            &:before {
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                transition: 0.4s ease-out;
                z-index: 2;
            }
        }

        .slider-content {
            position: absolute;
            top: 0;
            z-index: 3;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width; 100%;
            color: #fff;
            padding: 2rem calc((100vw - 1140px)/2);
    
            @media (max-width: 1140px) {
                padding: 2rem;
            }
    
            h1 {
                font-size: 7rem;
                margin-bottom: 1rem;
            }
    
            p {
                font-size: 2rem;
                max-width: 600px;
                line-height: 1.58;
                width: 100%;
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