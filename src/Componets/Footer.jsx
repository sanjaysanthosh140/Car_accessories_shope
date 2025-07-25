// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-column footer-brand">
                    <h3 className="footer-logo">AUTOACCENTS</h3>
                    <p className="brand-slogan">
                        Driving Passion, Delivering Perfection. Your ultimate destination for premium car accessories.
                    </p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className="footer-column footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Shop All</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#new-arrivals">New Arrivals</a></li>
                        <li><a href="#bestsellers">Bestsellers</a></li>
                    </ul>
                </div>

                <div className="footer-column footer-links">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#shipping">Shipping & Returns</a></li>
                        <li><a href="#orders">Order Tracking</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-column footer-contact">
                    <h4>Get In Touch</h4>
                    <p>123 Auto Street, Carville, CA 90210</p>
                    <p>Email: <a href="mailto:info@autoaccents.com">info@autoaccents.com</a></p>
                    <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                    <div className="payment-icons">
                        {/* Replace with actual payment method icons/images if desired */}
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
                        <img src="https://img.icons8.com/fluency/48/000000/paypal.png" alt="PayPal" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AutoAccents. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;