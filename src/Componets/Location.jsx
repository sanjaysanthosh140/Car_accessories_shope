import React from 'react'
import './Location.css'

const locations = [
  {
    city: 'Sydney',
    address: '123 Sample St, Sydney NSW 2000 AU',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26516.91653661258!2d151.2033763!3d-33.8674869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f1d5ecf7b%3A0x50217a82a254160!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },
  {
    city: 'New York',
    address: '123 Sample St, New York NY 10000 USA',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.816845501217!2d-74.006015!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzQ1LjgiTiA3NMKwMDAnMjAuOSJX!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  }
]

const Locations = () => {
  return (
    <section className="locations">
      <p className="locations-tagline">Tagline</p>
      <h2 className="locations-title">Locations</h2>
      <p className="locations-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="locations-container">
        {locations.map((loc, index) => (
          <div className="location-card" key={index}>
            <iframe
              src={loc.mapUrl}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '10px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.city}
            ></iframe>
            <h3 className="location-city">{loc.city}</h3>
            <p className="location-address">{loc.address}</p>
            <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="location-link">
              Get Directions <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Locations
