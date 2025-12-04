import React from "react";
import "./Location.css";

const locations = [
  {
    id: 1,
    name: "Location Thammanam",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3912741697877!2d76.306842!3d9.984501999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0035e587ef%3A0x8e6486e058731e7c!2sAUTO%20TOUCH%207D%20FLOORMAT%20MANUFACTURING!5e0!3m2!1sen!2sin!4v1754731416795!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Location Vyttila",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.59090050857!2d76.3115864!3d9.967954200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08736cd67f6e91%3A0x5a6c87ba01cd20db!2sS%20Garage%20car%20accessories%20shop!5e0!3m2!1sen!2sin!4v1754729139902!5m2!1sen!2sin",
  },
];

const OurLocations = () => {
  return (
    <section className="locations-section">
      <h2 className="locations-title">Visit Our Stores</h2>
      <div className="locations-grid">
        {locations.map((location) => (
          <div className="location-card" key={location.id}>
            <div className="map-embed-container">
              <iframe
                src={location.mapEmbedUrl}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={location.name}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLocations;
