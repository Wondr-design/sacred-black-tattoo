import React from 'react';
import Nav from './Nav';
import VideoPlayer from './Video';

const Hero = () => {
    return (
        <>
            <section className="hero_wrap">
                <div className="u-container">
                    <Nav />
                    <VideoPlayer src="/src/assets/video.mp4" />
                </div>
            </section>
        </>
    );
};

export default Hero;
