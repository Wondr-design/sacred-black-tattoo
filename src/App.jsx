import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Hero from '@/pages/Hero';
import Artist from '@/pages/Artist';
import Info from '@/pages/Info';
import Faq from '@/pages/Faq';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Hero />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/artist" element={<Artist />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
