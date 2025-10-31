// FeaturesList.jsx
import React from "react";
import "./CategorySection.css";
import { FaTh, FaLayerGroup, FaAndroid, FaYoutube,FaGem ,FaCrown} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaTh />,
    title: "Premium Car Seats",
    description:
      "Luxury and comfortable car seats with ergonomic design for long drives.",
    direct: "/seats",
  },
  {
    icon: <FaLayerGroup />,
    title: "Car Floor Mats",
    description:
      "Durable and waterproof car mats to protect your vehicle's interior.",
    direct: "/mat",
  },
  {
    icon: <FaAndroid />,
    title: "Android Products",
    description: "Smart Android devices and accessories for your modern car.",
    direct: "/android",
  },
  {
    icon: <FaCrown />,
    title: "Premium car accessories",
    description: "Watch detailed product reviews and installation guides.",
    direct: "/premium",
  },
  {
    icon: <FaYoutube />,
    title: "Video Reviews",
    description: "Watch detailed product reviews and installation guides.",
    direct: "/videos",
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
