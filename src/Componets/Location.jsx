// OurLocations.jsx
import React from 'react';
import './Location.css';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

// Google Maps embed URLs for each location
// Replace with actual Google Maps embed URLs for your specific locations.
// You can get these by going to Google Maps, finding your location, clicking 'Share', then 'Embed a map'.
const locations = [
    {
        id: 1,
        name: 'AutoAccents Downtown',
        address: '123 Grand Ave, Metropolis, CA 90210',
        phone: '+1 (555) 123-4567',
        hours: 'Mon-Sat: 9 AM - 7 PM',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000.0!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3f2d2b5%3A0x7d2b6b5d9b5e2b5e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1717424000000!5m2!1sen!2sus', // Example: Golden Gate Bridge
        directionsLink: 'https://maps.google.com/?q=123+Grand+Ave,+Metropolis,+CA+90210'
    },
    {
        id: 2,
        name: 'AutoAccents Northside',
        address: '456 Industrial Blvd, Tech City, NY 10001',
        phone: '+1 (555) 987-6543',
        hours: 'Mon-Fri: 10 AM - 6 PM',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000.0!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25983c27e8d69%3A0x8a92b2d0b5d9a4b1!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1717424000000!5m2!1sen!2sus', // Example: Statue of Liberty
        directionsLink: 'https://maps.google.com/?q=456+Industrial+Blvd,+Tech+City,+NY+10001'
    }
];

const OurLocations = () => {
    return (
        <section className="locations-section">
            <h2 className="locations-title">Visit Our Stores</h2>
            <p className="locations-tagline">Find us at two convenient locations, ready to serve your automotive needs.</p>

            <div className="locations-grid">
                {locations.map((location) => (
                    <div className="location-card" key={location.id}>
                        <h3 className="location-name">{location.name}</h3>
                        <div className="map-embed-container">
                            <iframe
                                src={location.mapEmbedUrl}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map for ${location.name}`}
                            ></iframe>
                        </div>
                        <div className="location-details">
                            <p><FaMapMarkerAlt /> {location.address}</p>
                            <p><FaPhone /> <a href={`tel:${location.phone}`}>{location.phone}</a></p>
                            <p><FaClock /> {location.hours}</p>
                            <a href={location.directionsLink} target="_blank" rel="noopener noreferrer" className="get-directions-button">
                                Get Directions
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurLocations;