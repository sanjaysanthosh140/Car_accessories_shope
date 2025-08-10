// HeroHeader.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../assets/giffs/hero_gif.gif';

const Hero = () => {
    return (
        <header className="hero-header" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Unleash Your Ride's True Potential</h1>
                <p className="hero-tagline">Premium Car Accessories for the Discerning Enthusiast</p>
                <button className="hero-cta-button">Shop Now</button>
            </div>
        </header>
    );
};

export default Hero;