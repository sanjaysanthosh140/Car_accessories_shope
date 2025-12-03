// Footer.jsx
import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column footer-brand">
          <h3 className="footer-logo">AUTO TOUCH</h3>
          <p className="brand-slogan">QUALITY IS OUR SIGNATURE</p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/shahul.ta.50?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/s_garage_cochin?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@sgarage.836"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about")}>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/cart")}>ProductCard</button>
            </li>
            <li>
              <button onClick={() => navigate("/")}>Categories</button>
            </li>
            <li>
              <button onClick={() => navigate("/seats")}>CarSeatDisplay</button>
            </li>
            <li>
              <button onClick={() => navigate("/mat")}>CarMatDisplay</button>
            </li>
            <li>
              <button onClick={() => navigate("/Contact")}>Contact</button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column footer-contact">
          <h4>Get In Touch</h4>
          <br />
          <h4>Dubai</h4>
          <p>2 13 St - Al Quoz - Al Quoz Industrial Area 2 - Dubai</p>
          <p>
            Phone: <a href="tel:+00971522881144">00971522881144</a>
          </p>
          <h4>India</h4>
          <p>
            S garage S.A ROAD PILLAR NUMBER 836 JANATHA JN VITTILA ERANAKULAM
            PIN 682019
          </p>
          <p>
            S garage AUTO TOUCH MAY FIRST ROAD THAMMANAM P.O THAMMANAM COCHIN
            682032 ERANAKULAM
          </p>

          <p>
            Phone: <a href="tel:+919447151263">+91 94471 51263</a>
          </p>
          <p>
            Phone: <a href="tel:+919446251263">+91 94462 51263</a>
          </p>
          <p>
            Phone: <a href="tel:+919446451263">+91 94464 51263</a>
          </p>
          <p>
            Phone: <a href="tel:+919249451263">+91 92494 51263</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AutoAccents. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
