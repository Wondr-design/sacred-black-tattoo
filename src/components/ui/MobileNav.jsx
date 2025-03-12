import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50">
            <nav className="flex flex-col gap-4">
                <Link to="/info">Info</Link>
                <Link to="/artists">Artists</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default MobileNav;
