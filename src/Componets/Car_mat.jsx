// CarMatDisplay.jsx
import React, { useState } from "react";
import "./Car_mat.css";

// Import your car mat images. You'll need different images for each color.
// For example, car-mat-black.png, car-mat-red.png, etc.
import carMatBlack from "../assets/mats/gray.jpg";
import carMatRed from "../assets/mats/gray.jpg"; 

import carMatGray from "../assets/mats/mat_brown.jpg";
import carMatBrown from "../assets/mats/matblack_back.jpg";

const colors = [
  { name: "Black", hex: "#1a1a1a", image: carMatBlack },
  { name: "Red", hex: "#c0392b", image: carMatRed },

  { name: "Camel", hex: "#C19A6B", image: "" },
  { name: "Spl_Came", hex: "#B88A62", image: "" },
  { name: "Light Browin", hex: "#B59982", image: "" },
  { name: "Beige", hex: "#F5F5DC", image: "" },
  { name: "Spl_B.scotch", hex: "#D2A679", image: "" },
  { name: "Fawn", hex: "#E5AA70", image: "" },
  { name: "Maroon", hex: "#800000", image: "" },
  { name: "L_TAN", hex: "#D2B48C", image: "" },
  { name: "Dark_Grey", hex: "#4B4B4B", image: "" },
  { name: "White", hex: "#FFFFFF", image: "" },
  { name: "Butter_Scotch", hex: "#E6C28B", image: "" },
  { name: "Mustard", hex: "#FFDB58", image: "" },
  { name: "Light_Beige", hex: "#F8F1E7", image: "" },
  { name: "Blue", hex: "#0000FF", image: "" },
  { name: "Light Grey", hex: "#D3D3D3", image: "" },
  { name: "B_Tan", hex: "#A67B5B", image: "" },

  { name: "Dark_Brown", hex: "#654321", image: "" },
  { name: "Off_White", hex: "#F8F8F0", image: "" },
  { name: "Royal_Beige", hex: "#EDE0C8", image: "" },
  { name: "Silver", hex: "#C0C0C0", image: "" },
  { name: "Mushroom", hex: "#BFAEA0", image: "" },
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
