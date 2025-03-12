import React from 'react';
import VideoPlayer from '@/components/Video';

const Home = () => {
    return (
        <>
            <section className="hero_wrap">
                <div className="u-container">
                    <VideoPlayer src="/video.mp4" />
                </div>
            </section>
        </>
    );
};

export default Home;
