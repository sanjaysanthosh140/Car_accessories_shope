// HeroHeader.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../assets/giffs/Hero.webp';

const Hero = () => {
    return (
        <header className="hero-header" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">AUTO TOUCH</h1>
                <p className="hero-tagline">Quality is our signature</p>
                {/* <button className="hero-cta-button">Shop Now</button> */}
            </div>
        </header>
    );
};

export default Hero;