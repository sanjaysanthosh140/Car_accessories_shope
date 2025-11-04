// Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
//import AutoAccentsLogo from './autoaccents-logo.png'; // Make sure you have this image in your src folder
import logo from '../assets/shop_logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigate = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    const handleKeyNav = (e, path) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNavigate(path);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div
                    className="navbar-logo"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleNavigate('/')}
                    onKeyDown={(e) => handleKeyNav(e, '/')}
                    aria-label="Home"
                >
                    <img src={logo} alt="AutoAccents Logo" className="logo-image" />
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <button className="nav-links" onClick={() => handleNavigate('/')}>
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-links" onClick={() => handleNavigate('/cart')}>
                            Gallery
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-links" onClick={() => handleNavigate('/')}>
                            Categories
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-links" onClick={() => handleNavigate('/about')}>
                            About Us
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-links" onClick={() => handleNavigate('/contact')}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;