import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/MainPage/MainPage';
import FirstLevel from '../../../pages/FirstLevel/FirstLevel';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/first-level" element={ <FirstLevel /> } />
    </Routes>
);

export { AppRouter };
