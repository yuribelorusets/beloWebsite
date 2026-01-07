import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutme' element={<AboutMe />}/>
            <Route path='/work' element={<Work />}/>
            <Route path='/education' element={<Education />}/>
            <Route path='/skills' element={<Skills />}/>
        </Routes>
    );
}

export default Main;