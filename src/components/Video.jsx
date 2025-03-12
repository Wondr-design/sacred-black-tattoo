import PropTypes from 'prop-types';
import React from 'react';
const VideoPlayer = ({ src }) => {
    if (!src) return null; // Handle missing src gracefully

    return (
        <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default VideoPlayer;
