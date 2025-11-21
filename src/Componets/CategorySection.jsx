// FeaturesList.jsx
import React from "react";
import "./CategorySection.css";
import {
  FaTh,
  FaLayerGroup,
  FaAndroid,
  FaYoutube,
  FaGem,
  FaCrown,
  FaChair,
  FaGamepad,
  FaWind,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaTh className="feature-svg" />,
    title: "Premium Car Seats",
    description:
      "Luxury and comfortable car seats with ergonomic design for long drives.",
    direct: "/seats",
  },
  {
    icon: <FaChair className="feature-svg" />,
    title: "Car Seat Display",
    description:
      "Premium seating solutions with custom upholstery and heating options for ultimate comfort.",
    direct: "/cart",
  },
  {
    icon: <FaLayerGroup className="feature-svg" />,
    title: "Car Floor Mats",
    description:
      "Durable and waterproof car mats to protect your vehicle's interior.",
    direct: "/mat",
  },
  {
    icon: <FaLayerGroup className="feature-svg" />,
    title: "Car Floor Mats",
    description:
      "Durable and waterproof car mats to protect your vehicle's interior.",
    direct: "/4D_mats",
  },
  {
    icon: <FaAndroid className="feature-svg" />,
    title: "Android Products",
    description: "Smart Android devices and accessories for your modern car.",
    direct: "/android",
  },
  {
    icon: <FaCrown className="feature-svg" />,
    title: "Premium car accessories",
    description: "Watch detailed product reviews and installation guides.",
    direct: "/premium",
  },
  {
    icon: <FaYoutube className="feature-svg" />,
    title: "Video Reviews",
    description: "Watch detailed product reviews and installation guides.",
    direct: "/videos",
  },
  {
    icon: <FaGamepad className="feature-svg" />,
    title: "Full Body Controller",
    description:
      "Advanced in-car entertainment systems with touchscreen controls and steering wheel integration.",
    direct: "/",
  },
  {
    icon: <FaWind className="feature-svg" />,
    title: "AC Seats",
    description:
      "Climate-controlled seats with cooling and heating functions for all-season comfort and support.",
    direct: "/",
  },
];

const FeaturesList = () => {
  const navigate = useNavigate();
  const direct = (directto) => {
    navigate(`${directto}`);
  };
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <button
            className="feature-card"
            key={index}
            onClick={() => direct(feature.direct)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;
