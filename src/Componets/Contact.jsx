import React from "react";
import "./Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact-container">
      {/* <div className="contact-card"> */}
      {/* <FiMail className="contact-icon" /> */}
      {/* <h3>Email</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p> */}
      {/* <a href="mailto:email@example.com">email@example.com</a> */}
      {/* </div> */}

      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Office</h3>
        <p>Location Thammanam</p>
        <a
          href="https://maps.app.goo.gl/tzV84g8C7ArzmtGr6?g_st=awb "
          target="_blank"
          rel="noopener noreferrer"
        >
          123 Sample St. Sydney NSW 2000 AU
        </a>
      </div>
      <div className="contact-card">
        <FiPhone className="contact-icon" />

        <h3>Phone</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in ero.
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
        <p>Location vyttila</p>
        <a
          href="https://maps.app.goo.gl/LVRJWYyHvkSmNG8fA
"
          target="_blank"
          rel="noopener noreferrer"
        >
          123 Sample St. Sydney NSW 2000 AU
        </a>
      </div>
    </section>
  );
};

export default Contact;
