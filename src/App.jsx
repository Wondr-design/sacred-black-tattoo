import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router/Router';
import { ThemeProvider } from '@/context/ThemeContext';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
