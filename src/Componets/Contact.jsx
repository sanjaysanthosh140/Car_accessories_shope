import React from "react";
import "./Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact-container">

      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Office</h3>
        <p>
          S garage S.a.road Metro pillar number 836 Janatha in Cochin 682019
          Vyttila  ERANAKULAM
        </p>
        <a
          href="https://maps.app.goo.gl/tzV84g8C7ArzmtGr6?g_st=awb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cochin 682019 Vyttila  ERANAKULAM
        </a>
      </div>
      <div className="contact-card">
        <FiPhone className="contact-icon" />

        <h3>Phone</h3>
        <p>
          contact the Shop support team, use the Shop contact form. For
          questions about a specific topics{" "}
        </p>
        <a
          href="tel: +919446251263
"
        >
          Off: 9446251263
        </a>
        <a
          href="tel: +919446451263
"
        >
          service: 9446451263
        </a>
        <a
          href="tel:+918089123433
"
        >
          8089123433
        </a>
        <a
          href="tel:+919249451263
"
        >
          919249451263
        </a>
      </div>

      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Office</h3>
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
    </section>
  );
};

export default Contact;
