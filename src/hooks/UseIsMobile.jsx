import { useState, useEffect } from 'react';

// Define Tailwind breakpoints as an object
const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

const useIsMobile = (breakpoint = 'md') => {
    // Convert 'md' to 768 (or use number directly)
    const bp =
        typeof breakpoint === 'string'
            ? BREAKPOINTS[breakpoint] || 768
            : breakpoint;

    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < bp : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < bp);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [bp]);

    return isMobile;
};

export default useIsMobile;
