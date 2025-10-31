// Navbar.jsx
import React, { useState } from 'react';
import './Header.css';
//import AutoAccentsLogo from './autoaccents-logo.png'; // Make sure you have this image in your src folder
import logo from '../assets/shop_logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="AutoAccents Logo" className="logo-image" />
                </a>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/cart" className="nav-links" onClick={() => setIsOpen(false)}>Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={() => setIsOpen(false)}>Categories</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links" onClick={() => setIsOpen(false)}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-links" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;