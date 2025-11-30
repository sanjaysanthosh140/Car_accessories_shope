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
  FaCouch,
  FaBorderAll,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GiCarSeat } from "react-icons/gi";
import { BsFan } from "react-icons/bs";
import { BiChip } from "react-icons/bi";

const features = [
  {
    icon: <FaTh className="feature-svg" />,
    title: "Premium Car Seats",
    description:
      "Luxury and comfortable car seats with ergonomic design for long drives.",
    direct: "/seats",
  },
  {
    icon: <GiCarSeat className="feature-svg" />,
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
    icon: <FaBorderAll className="feature-svg" />,
    title: "Flooring — 5D, 7D & Vinyl",
    description:
      "Explore 4D and 7D mats plus vinyl flooring in one place. Durable, easy to clean, and designed to fit your car perfectly.",
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
    icon: <BiChip className="feature-svg" />,
    title: "Full Body Controller",
    description:
      "We install a smart Full Body Control System that manages all your car’s electrical features—like lights, locks, windows, wipers, and sensors—for safer and smoother control.",
    direct: "/",
  },
  {
    icon: <BsFan className="feature-svg" />,
    title: "ventilated seat system",
    description:
      "We install ventilated seat systems without removing your original seat cover or rexin. Everything is fitted safely inside the seat, giving you cool and comfortable airflow.",
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
