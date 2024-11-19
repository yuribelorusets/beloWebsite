import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import headshot from '../images/headshot.jpg';
import resumePDF from '../docs/Yuri-Belorusets-Resume.pdf';

function Home () {

    return (
        <div className='home-container'>
            <div className='profile-pic-container'>
                <img src={headshot} className='profile-pic-image' alt='profile-pic'/>
            </div>
            <div className='text-container'>
                <h1 className='hello'>Hello! My name is Yuri.</h1>
                <div className='route-buttons'>
                    <Link to="/work"><button className='route-button'>Projects</button></Link>
                    <Link to="/skills"><button className='route-button'>Skills</button></Link>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <button className='route-button'>Resume</button>
                    </a>
                </div>
                <p className='description'>
                    I'm a Software Engineer passionate about building impactful applications.
                    Currently working as a machine learning engineer at Second Spectrum,
                    I specialize in [your key technologies, e.g., React, Node.js, Python].
                </p>
            </div>
        </div>
    )
}

export default Home;