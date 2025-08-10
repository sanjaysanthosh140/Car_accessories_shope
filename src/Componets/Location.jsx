// OurLocations.jsx
import React from "react";
import "./Location.css";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; 
// Google Maps embed URLs for each location
// Replace with actual Google Maps embed URLs for your specific locations.
// You can get these by going to Google Maps, finding your location, clicking 'Share', then 'Embed a map'.
const locations = [
  {
    id: 1,
    name: "Location Thammanam",
    address: "123 Grand Ave, Metropolis, CA 90210",
    phone: "+91 9447151263",
    hours: "Mon-Sat: 9 AM - 7 PM",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3912741697877!2d76.306842!3d9.984501999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0035e587ef%3A0x8e6486e058731e7c!2sAUTO%20TOUCH%207D%20FLOORMAT%20MANUFACTURING!5e0!3m2!1sen!2sin!4v1754731416795!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade', // Example: Golden Gate Bridge
    directionsLink: "https://maps.app.goo.gl/LVRJWYyHvkSmNG8fA",
  },
  {
    id: 2,
    name: "Location  vyttila ",
    address: "Your Address Here", // (Optional: add a human-readable address)
    phone: "+91 9249451263", // Update if needed
    hours: "Mon–Fri: 10 AM – 6 PM",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.59090050857!2d76.3115864!3d9.967954200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08736cd67f6e91%3A0x5a6c87ba01cd20db!2sS%20Garage%20car%20accessories%20shop!5e0!3m2!1sen!2sin!4v1754729139902!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
    directionsLink: "https://maps.app.goo.gl/tzV84g8C7ArzmtGr6?g_st=awb",
  },
];

const OurLocations = () => {
  return (
    <section className="locations-section">
      <h2 className="locations-title">Visit Our Stores</h2>
      <p className="locations-tagline">
        Find us at two convenient locations, ready to serve your automotive
        needs.
      </p>

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
              <p>
                <FaMapMarkerAlt /> {location.address}
              </p>
              <p>
                <FaPhone />{" "}
                <a href={`tel:${location.phone}`}>{location.phone}</a>
              </p>
              <p>
                <FaClock /> {location.hours}
              </p>
              <a
                href={location.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions-button"
              >
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
