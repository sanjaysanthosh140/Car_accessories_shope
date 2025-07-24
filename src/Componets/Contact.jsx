import React from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <FiMail className="contact-icon" />
        <h3>Email</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
        <a href="mailto:email@example.com">email@example.com</a>
      </div>
      <div className="contact-card">
        <FiPhone className="contact-icon" />
        <h3>Phone</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
        <a href="tel:+15550000000">+1 (555) 000-0000</a>
      </div>
      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Office</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
        <a
          href="https://www.google.com/maps/place/123+Sample+St,+Sydney+NSW+2000,+Australia"
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
