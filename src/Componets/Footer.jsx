// Footer.jsx
import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <h3 className="footer-logo">AUTO TOUCH</h3>
          <p className="brand-slogan">QUALITY IS OUR SIGNATURE</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/shahul.ta.50?mibextid=ZbWKwL
"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href=" https://instagram.com/s_garage_cochin?igshid=NTc4MTIwNjQ2YQ==
"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@sgarage.836
"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cart">ProductCard</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/seats">CarSeatDisplay</a>
            </li>
            <li>
              <a href="/mat">CarMatDisplay</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Get In Touch</h4>
          <p>
            metro Pillar No 836, S.A Road,Janatha Jn, Vyttila, Amballur,
            Ernakulam 682019
          </p>
          <h4></h4>
          <p>
            S garage AUTO TOUCH MAY FIRST ROAD THAMMANAM P.O THAMMANAM COCHIN
            682032 ERANAKULAM
          </p>
          {/* <p> */}
          {/* Email:{" "} */}
          {/* <a href="mailto:info@autoaccents.com">info@autoaccents.com</a> */}
          {/* </p> */}
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
