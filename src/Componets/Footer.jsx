import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">Logo</div>
        <nav className="footer-nav">
          <a href="#">Shop Now</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
        </nav>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 Car Accessories Shop. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
