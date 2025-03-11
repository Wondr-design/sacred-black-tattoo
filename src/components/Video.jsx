import PropTypes from 'prop-types';
const VideoPlayer = ({ src }) => {
    return (
        <>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-20"
                autoPlay
                loop
                muted
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    );
};

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default VideoPlayer;
