// CarMatDisplay.jsx
import React, { useState } from "react";
import "./Car_mat.css";

// Import your car mat images. You'll need different images for each color.
// For example, car-mat-black.png, ca
// r-mat-red.png, etc.

import mat_black from '../assets/mats/mat_black_benz.jpg'
import mat_red from '../assets/mats/mat_red.jpg'
import mat_brown from '../assets/mats/mat_brown.jpg'
import mat_beige from '../assets/mats/mat_batter.jpg'
import mat_Spl_ from '../assets/mats/mat_orang2.jpg'
import mat_brown_maron from '../assets/mats/mat_dark_brown.jpg'
import mat_gray from '../assets/mats/mat_gray2.jpg'
import mat_white from '../assets/mats/mat_pure_butter.jpg'
import mat_white2 from '../assets/mats/mat_batter.jpg'
import mat_blue from '../assets/mats/mat_blue2.jpg'
import mat_lite_gray from '../assets/mats/mat_gray2.jpg'
import mat_l_tan from '../assets/mats/mat_gray_brown.jpg'
import dark_brown from '../assets/mats/mat_dicky_brown2.jpg'
const colors = [
  { name: "Black", hex: "#1a1a1a", image: mat_black },
  { name: "Red", hex: "#c0392b", image: mat_red },
  { name: "Light Browin", hex: "#B59982", image: mat_brown },
  { name: "Beige", hex: "#F5F5DC", image: mat_beige },
  { name: "Spl_B.scotch", hex: "#D2A679", image: mat_Spl_ },
  //{ name: "Fawn", hex: "#E5AA70", image: "" },
  { name: "Maroon", hex: "#800000", image: mat_brown_maron },
  //{ name: "L_TAN", hex: "#D2B48C", image: "" },
  { name: "Dark_Grey", hex: "#4B4B4B", image: mat_gray },
  { name: "White", hex: "#FFFFFF", image: mat_white },
  { name: "Light_Beige", hex: "#F8F1E7", image: mat_white2 },
  { name: "Blue", hex: "#0000FF", image: mat_blue },
  { name: "Light Grey", hex: "#D3D3D3", image: mat_lite_gray },
  { name: "B_Tan", hex: "#A67B5B", image: mat_l_tan },
  { name: "Dark_Brown", hex: "#654321", image: dark_brown },
];

const CarMatDisplay = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isAnimating, setIsAnimating] = useState(false);
 
  const handleColorChange = (color) => {
    if (color.name === selectedColor.name) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSelectedColor(color);
      setIsAnimating(false);
    }, 300); // Duration matches CSS animation
  };

  return (
    <section className="car-mat-display-section">
      <div className="display-container-mat">
        <h2 className="display-title-mat">Premium Car Mats</h2>
        <p className="display-subtitle-mat">
          Choose the perfect color to complement your car's interior.
        </p>

        <div className="mat-content-wrapper">
          {/* Color selectors on the right */}
          <div className="color-selectors-mat">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-swatch-mat ${
                  selectedColor.name === color.name ? "active" : ""
                }`}
                style={{ "--swatch-color-mat": color.hex }}
                onClick={() => handleColorChange(color)}
                aria-label={`Select ${color.name} color`}
                data-tooltip={color.name}
              ></div>
            ))}
          </div>

          {/* Central Mat Viewer */}
          <div className="mat-viewer-wrapper">
            <div
              className={`car-mat-image-container ${
                isAnimating ? "animating" : ""
              }`}
            >
              <img
                src={selectedColor.image}
                alt={`${selectedColor.name} Car Mat`}
                className="car-mat-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarMatDisplay;
