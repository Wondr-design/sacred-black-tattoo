import React from 'react';
import VideoPlayer from '@/components/Video';

const Hero = () => {
    return (
        <>
            <section className="hero_wrap">
                <div className="u-container">
                    {/* <Nav /> */}
                    <VideoPlayer src="/src/assets/video.mp4" />
                </div>
            </section>
        </>
    );
};

export default Hero;
