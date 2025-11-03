// PremiumProductCard.jsx
import React from "react";
import "./Carts.css";
import product_2 from "../assets/prod/android_1.webp";
import product_3 from "../assets/prod/android_2.webp";
import product_1 from "../assets/prod/android_3.webp";
import product_4 from "../assets/prod/android_4.webp";
//import product_5 from "../assets/prod/android_5.webp";
import product_6 from "../assets/prod/android_6.webp";
import product_7 from "../assets/prod/android_7.webp";
import product_8 from "../assets/prod/android_8.webp";
import product_9 from "../assets/prod/android_9.webp";
import product_10 from "../assets/prod/android_10.webp";
import product_11 from "../assets/prod/android_11.webp";
import product_12 from "../assets/prod/android_12.webp";
import product_13 from "../assets/prod/android_13.webp";
import product_14 from "../assets/prod/android_14.webp";
import product_15 from "../assets/prod/android_15.webp";
import product_16 from "../assets/prod/android_16.webp";
import product_17 from "../assets/prod/android_17.webp";
import product_18 from "../assets/prod/android_18.webp";
const PremiumProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Android Auto & Apple CarPlay Hybrid Screen",
      image: product_1,
      price: 599.99,
      description: "A dual interface supporting both Android and iOS for seamless phone connectivity.",
    },
    {
      id: 2,
      name: "Modern Touch Infotainment Display",
      image: product_2,
      price: 1200.0,
      description: "Sleek digital interface with circular control knobs, designed for smooth in-car navigation and media.",
    },
    {
      id: 3,
      name: "Aimen Android Car Stereo",
      image: product_3,
      price: 850.0,
      description: "Android-based smart dashboard unit with customizable widgets and Bluetooth support.",
    },

    {
      id: 4,
      name: "Luxury Car Android Infotainment (Mercedes Style)",
      image: product_4,
      price: 1800.0,
      description: "Large vertical touchscreen display integrated into a premium dashboard setup.",
    },
    // {
    //   id: 5, //2
    //   name: "",
    //   image: product_5,
    //   price: 1100.0,
    //   description: "",
    // },
    {
      id: 5,
      name: "Android Dashboard Display (Sports Interior)",
      image: product_6,
      price: 1100.0,
      description: "Performance-oriented infotainment unit with an Android OS and enhanced visual UI.",
    },
    {
      id: 6,
      name: "Apple CarPlay & Android Auto Combo Unit",
      image: product_7,
      price: 1100.0,
      description: "Compact stereo with CarPlay, Android Auto, mic input, and reverse camera support.",
    },
    {
      id: 7,
      name: "Wireless CarPlay & Android Auto Screen",
      image: product_8,
      price: 1100.0,
      description: "Supports both wired and wireless connections for flexible smartphone integration.",
    },
    {
      id: 8,
      name: "Android Multimedia Head Unit (Wide Display)",
      image: product_9,
      price: 1100.0,
      description: "Wide touchscreen designed for high-end cars, providing navigation and media control.",
    },
    {
      id: 9,
      name: "Advanced Android Car Stereo (4K Display)",
      image: product_10,
      price: 1100.0,
      description: "High-resolution display offering crisp visuals and app-based controls.",
    },
    {
      id: 10,
      name: "Android Smart Car Dashboard (Full Touch)",
      image: product_11,
      price: 1100.0,
      description: "Full touchscreen multimedia system offering modern Android features for any vehicle.",
    },
    {
      id: 12,
      name: "loating Android Head Unit",
      image: product_12,
      price: 1100.0,
      description: "Floating design for better viewing and flexible dashboard fit.",
    },
    {
      id: 13,
      name: "Premium Android Multimedia Hub",
      image: product_13,
      price: 1100.0,
      description: "High-end infotainment system with vivid visuals and fast response.",
    },
    {
      id: 14,
      name: "Android Car Tablet Display",
      image: product_14,
      price: 1100.0,
      description: "Tablet-style interface for apps, maps, and entertainment.",
    },
    {
      id: 15,
      name: "Split-Screen Android Console",
      image: product_15,
      price: 1100.0,
      description: "Supports multitasking — navigation and music side by side.",
    },
    {
      id: 16,
      name: "",
      image: product_16,
      price: 1100.0,
      description: "",
    },
    {
      id: 17,
      name: "Compact Android Car Stereo",
      image: product_17,
      price: 1100.0,
      description: "Space-saving model with essential Android smart features.",
    },
    {
      id: 18,
      name: "HD Android Navigation Screen",
      image: product_18,
      price: 1100.0,
      description: "High-definition display optimized for real-time navigation.",
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
                {/* <p className="overlay-product-price"> */}
                {/* ₹{product.price.toFixed(2)} */}
                {/* </p> */}
                {/* <button className="overlay-button">View Product</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumProductCard;
