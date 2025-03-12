import React from 'react';
import VideoPlayer from '@/components/Video';
import useIsMobile from '@/hooks/UseIsMobile';

const Home = () => {
    const isMobile = useIsMobile('sm');
    return (
        <>
            <section className="hero_wrap">
                <div className="u-container">
                    <VideoPlayer src="/video.mp4" />
                </div>
                <p>{isMobile ? 'You are on mobile' : 'You are on desktop'}</p>
            </section>
        </>
    );
};

export default Home;
