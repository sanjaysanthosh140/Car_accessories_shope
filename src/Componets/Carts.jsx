// PremiumProductCard.jsx
import React from "react";
import "./Carts.css";
import product_1 from "../assets/prod/prod1.jpg";
import product_2 from "../assets/prod/prod2.jpg";
import product_3 from "../assets/prod/prod3.jpg";
import product_4 from "../assets/prod/prod4.jpg";
import product_5 from "../assets/prod/prod5.jpg";
import product_6 from "../assets/prod/prod6.jpg";
import product_7 from "../assets/prod/prod7.jpg";
import product_8 from "../assets/prod/prod8.jpg";
import product_9 from "../assets/prod/prod9.jpg";
import product_10 from "../assets/prod/prod10.jpg";
import product_11 from "../assets/prod/prod11.jpg";
import product_12 from "../assets/prod/prod12.jpg";
import product_13 from "../assets/prod/prod13.jpg";
import product_14 from "../assets/prod/prod14.jpg";
import product_15 from "../assets/prod/prod15.jpg";
import product_16 from "../assets/prod/prod16.jpg";
import product_17 from "../assets/prod/prod17.jpg";
import product_18 from "../assets/prod/prod18.jpg";
import product_19 from "../assets/prod/prod19.jpg";
import product_20 from "../assets/prod/prod20.jpg";
import product_21 from "../assets/prod/prod21.jpg";
import product_22 from "../assets/prod/prod22.jpg";
import product_23 from "../assets/prod/prod23.jpg";
import product_24 from "../assets/prod/prod24.jpg";
import product_25 from "../assets/prod/prod25.jpg";
const PremiumProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Q18 15W Wireless Charging Bracket",
      image: product_1,
      price: 599.99,
      description:
        "A car phone holder that automatically locks and offers 15W wireless charging via infrared induction and multi-angle rotation.",
    },
    {
      id: 2,
      name: "RT-60L Air Outlet/Car Mobile Phone Holder",
      image: product_2,
      price: 1200.0,
      description:
        "A simple, non-charging mobile phone holder designed to clip into a cars air vent, allowing 360-degree rotation",
    },
    {
      id: 3,
      name: "Q18 Smart Car Wireless Charging Holder",
      image: product_3,
      price: 850.0,
      description:
        "A disassembled view of a smart car phone holder with a wireless charging coil and air vent mount.",
    },

    {
      id: 4,
      name: "Magnetic Phone Holder / Stand",
      image: product_4,
      price: 1800.0,
      description:
        "A magnetic dashboard or windshield mount for a mobile phone, featuring a strong adhesive base and a simple magnetic docking surface.",
    },
    {
      id: 5, //2
      name: "Portable Car Air Compressor",
      image: product_5,
      price: 1100.0,
      description:
        "A compact, portable air compressor pump designed to inflate car tires, featuring a digital display for pressure readings.",
    },
    {
      id: 6,
      name: "Q18 Smart Wireless Charging Car Holder",
      image: product_6,
      price: 1100.0,
      description:
        "A disassembled view of a wireless charging car phone mount, highlighting its internal mechanisms and vent/dashboard mount options.",
    },
    {
      id: 7,
      name: "C05 Wireless Induction Car Holder",
      image: product_7,
      price: 1100.0,
      description:
        "An automatic clamping wireless charging phone holder for a car, featuring fast charging and 360-degree rotation.",
    },
    {
      id: 8,
      name: "Premium Car Speaker (Snaptronic)",
      image: product_8,
      price: 1100.0,
      description:
        "A round, full-range car speaker, possibly coaxial, shown with its grille and designed for high-quality audio output.",
    },
    {
      id: 9,
      name: "RT-60L Air Outlet Car Phone Holder",
      image: product_9,
      price: 1100.0,
      description:
        "A non-charging, gravity or mechanical clip-style phone holder designed to mount to the car's air conditioning vent.",
    },
    {
      id: 10,
      name: "Universal Car Floor Mats (Beige/Tan)",
      image: product_10,
      price: 1100.0,
      description:
        "A set of universal, anti-slip car floor mats in a beige or tan color with a rubberized bottom and a textured surface.",
    },
    {
      id: 11,
      name: "Universal Car Floor Mats (Black)",
      image: product_11,
      price: 1100.0,
      description:
        "A set of anti-slip car floor mats in a black color with a textured rubber surface, designed to be durable and easy to clean.",
    },
    {
      id: 12,
      name: "Diamond Cut Car Steering Wheel Cover",
      image: product_12,
      price: 1100.0,
      description:
        "A premium steering wheel cover with a diamond-cut or textured ergonomic grip pattern for enhanced comfort and control.",
    },
    {
      id: 13,
      name: "Multi-purpose LED Car Hazard/Warning Triangle",
      image: product_13,
      price: 1100.0,
      description:
        "A portable, multi-function LED light shaped like a warning triangle, often used for roadside emergencies and featuring various lighting modes.",
    },
    {
      id: 14,
      name: "Pioneer Champion Series Subwoofer (TS-W1212D4)",
      image: product_14,
      price: 1100.0,
      description:
        "A 12-inch Dual Voice Coil (DVC) passive car subwoofer from Pioneer's Champion Series, known for high power and deep bass, with a maximum power of 1600W and 500W RMS power.",
    },
    {
      id: 15,
      name: "Snaptronic Front Camera (ST-CM 258)",
      image: product_15,
      price: 1100.0,
      description:
        "A small, waterproof camera designed for front-view parking or driving assistance, likely featuring a wide-angle lens.",
    },
    {
      id: 16,
      name: "Snaptronic Dual Parking Sensor System (ST-CPS 403)",
      image: product_16,
      price: 1100.0,
      description:
        "A car parking assistance system with a digital display and sensors for the front and rear of the vehicle.",
    },
    {
      id: 17,
      name: "Snaptronic Android Player",
      image: product_17,
      price: 1100.0,
      description:
        "A large, 9-inch universal-fit touch screen head unit running the Android operating system for car audio, video, and navigation.",
    },
    {
      id: 18,
      name: "Snaptronic Android Player (ST-AD 368)",
      image: product_18,
      price: 1100.0,
      description:
        "A premium 9-inch car Android Player that features a curved Gorilla Glass screen, 2GB RAM / 32GB ROM, and compatibility with both Android and iPhone (Mirror Link).",
    },
    {
      id: 19,
      name: "RaceMark LED Headlight",
      image: product_19,
      price: 1100.0,
      description:
        "A high-power LED headlight bulb, advertised for bright illumination and use in a car's headlamp assembly.",
    },
    {
      id: 20,
      name: "Godrej Aer Click Car Air Freshener",
      image: product_20,
      price: 1100.0,
      description:
        "A car air vent-mounted gel air freshener with a 'Rich Irish Cocktail' fragrance, known for its spill-proof clever gel technology and click mechanism.",
    },
    {
      id: 21,
      name: "Geesonic Rearview Mirror MP5 Player (GS-7100T)",
      image: product_21,
      price: 1100.0,
      description:
        "A 7-inch touch screen MP5 multimedia player that clips onto the existing rearview mirror, featuring 1080P HD display and Bluetooth connectivity",
    },
    {
      id: 22,
      name: "AHD Reverse Camera",
      image: product_22,
      price: 1100.0,
      description:
        "A small, black car camera, labeled as AHD (Analog High Definition), specifically for rear-view or reversing assistance.",
    },
    {
      id: 23,
      name: "Power Adapter / Charger",
      image: product_23,
      price: 1100.0,
      description:
        "A universal car power adapter or charger with multiple ports (likely USB or Type-C) for charging mobile devices on the go.",
    },
    {
      id: 10,
      name: "Custom Leather Racing Seats",
      image: product_24,
      price: 1100.0,
      description:
        "Experience unparalleled comfort and support on track or street.",
    },
    {
      id: 10,
      name: "Custom Leather Racing Seats",
      image: product_25,
      price: 1100.0,
      description:
        "Experience unparalleled comfort and support on track or street.",
    },
  ];

  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <div key={product.id} className="premium-product-card">
          <div className="premium-product-card-inner">
            <div className="premium-product-card-front">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-background-image"
              />
            </div>
            <div className="premium-product-card-back">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-background-image"
              />
              <div className="product-details-overlay">
                <h3 className="overlay-product-name">{product.name}</h3>
                <p className="overlay-product-description">
                  {product.description}
                </p>
                <p className="overlay-product-price">
                  ₹{product.price.toFixed(2)}
                </p>
                <button className="overlay-button">View Product</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumProductCard;
