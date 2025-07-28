// FeaturesList.jsx
import React from "react";
import "./CategorySection.css";
import { FaShippingFast, FaAward, FaTags, FaCarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Fast & Secure Shipping",
    description:
      "Get your parts delivered swiftly and safely to your doorstep.",
    direct: "/seats",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality Products",
    description:
      "Only the best accessories from trusted brands for your vehicle.",
    direct: "/mat",
  },
  {
    icon: <FaTags />,
    title: "Competitive Pricing",
    description: "Enjoy great value on all our automotive enhancements.",
    direct: "/cart",
  },
  {
    icon: <FaCarAlt />,
    title: "Expert Support",
    description: "Our team of car enthusiasts is here to help you choose.",
    direct: "/mat",
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
