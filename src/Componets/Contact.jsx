import React from "react";
import "./Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaMapPin, FaRupeeSign } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-card" data-type="phone">
        <FiPhone className="contact-icon" aria-hidden="true" />
        <h3>Phone</h3>
        <p>
          Contact our shop support team for any inquiries about our services or
          specific topics
        </p>
        <div className="phone-numbers-group">
          <a
            href="tel:+919446251263"
            aria-label="Office phone number: 9446251263"
          >
            <span>Office:</span> 9446251263
          </a>
          <a
            href="tel:+919446451263"
            aria-label="Service phone number: 9446451263"
          >
            <span>Service:</span> 9446451263
          </a>
          <a
            href="tel:+918089123433"
            aria-label="Alternative phone number: 8089123433"
          >
            8089123433
          </a>
          <a
            href="tel:+919249451263"
            aria-label="Alternative phone number: 919249451263"
          >
            919249451263
          </a>
        </div>
      </div>

      <div className="contact-card" data-type="location">
        <FiMapPin className="contact-icon" aria-hidden="true" />
        <h3>Office Location India</h3>
        <p>
          S garage S.a.road Metro pillar number 836 Janatha in Cochin 682019
          Vyttila ERANAKULAM
        </p>
        <a
          href="https://maps.app.goo.gl/tzV84g8C7ArzmtGr6?g_st=awb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Vyttila office location on Google Maps"
          className="map-link"
        >
          <FiMapPin style={{ marginRight: "8px" }} />
          View on Maps
        </a>
      </div>

      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Office Location India </h3>
        <p>
          S garage AUTO TOUCH MAY FIRST ROAD THAMMANAM P.O THAMMANAM COCHIN
          682032 ERANAKULAM
        </p>
        <a
          href="https://maps.app.goo.gl/LVRJWYyHvkSmNG8fA
"
          target="_blank"
          rel="noopener noreferrer"
        >
          THAMMANAM COCHIN 682032 ERANAKULAM
        </a>
      </div>

      <div className="contact-card">
        <FaMapPin className="contact-icon" />
        <h3>Office Location Dubai</h3>
        <p>
          2 13 St - Al Quoz - Al Quoz Industrial Area 2 - Dubai
        </p>
      </div>

      <div className="contact-card">
        <FaRupeeSign className="contact-icon" />
        <h3>BAJAJ EMI Credit Card Fitting & Sales Service</h3>
        <p>
          We offer easy BAJAJ EMI and credit card services for your car
          accessory purchases. Enjoy instant approvals, flexible EMIs, and a
          smooth buying experience right at our shop.
        </p>
      </div>
    </section>
  );
};

export default Contact;
