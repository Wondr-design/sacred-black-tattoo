import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Artist from '@/pages/Artist';
import Home from '@/pages/Home';
import Faq from '@/pages/Faq';
import Info from '@/pages/Info';
import Contact from '@/pages/Contact';
import Gallery from '@/pages/Gallery';
import NotFound from '@/pages/NotFound';
import MainLayout from '@/layouts/MainLayout';
import Nav from '@/components/ui/Nav';

const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
            <Route
                path="/artists"
                element={
                    <MainLayout>
                        <Artist />
                    </MainLayout>
                }
            />
            <Route
                path="/faq"
                element={
                    <MainLayout>
                        <Faq />
                    </MainLayout>
                }
            />
            <Route
                path="/info"
                element={
                    <MainLayout>
                        <Info />
                    </MainLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                }
            />
            <Route
                path="/gallery"
                element={
                    <MainLayout>
                        <Gallery />
                    </MainLayout>
                }
            />
            <Route path="/nav" element={<Nav />} />
            {/* 🔥 Catch-All Route for 404 Pages (MUST be at the bottom) */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
