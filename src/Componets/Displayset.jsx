// CarMatDisplay.jsx
import React, { useState } from "react";
import "./Displayset.css";

// Import your car mat images. You'll need different images for each color.
// For example, car-mat-black.png, car-mat-red.png, etc.
// import carMatBlack from "../assets/mats/gray.jpg";
// import carMatRed from "../assets/mats/gray.jpg";
// import carMatGray from "../assets/mats/mat_brown.jpg";
// import carMatBrown from "../assets/mats/matblack_back.jpg";
import red_seat from '../assets/red_black.png'
import spl_camel  from '../assets/Spl_Camel_black.png'
import lite_brown from '../assets/lite_brown_black.png'
import beige_black from '../assets/Beige_black.png'
import spi_b_scot from '../assets/spl_b.scot_red.png'
import fawn_black from '../assets/fawn_balck.png'
import maroon_black from '../assets/maroon_black.png'
import l_tan from '../assets/L_tan_black.png'
import white from '../assets/white_black.png'
import butter_scot from '../assets/Butter_scotch_black.png'
import lite_bigen from '../assets/light_beige.png'
import blue_black from '../assets/balck_blue.png'
import b_ten_red from '../assets/B_Tan_red.png'
import blacke_red from '../assets/balck_red.png'
import gray_black from '../assets/gray_black.png'
import camel_black from '../assets/camel_black.png'
import lite_gray from  '../assets/lite_gray_camel.png'
import off_white from '../assets/off_white.png'
import dark_brown_white from '../assets/dark_brown_white.png'
import royal_begin from '../assets/royal_begin.png'
import sliver_brown from '../assets/sliver_brown.png'
import Mushroom from '../assets/Mushroom_gray.png'

const colors = [
  { name: "Black", hex: "#1a1a1a", image: blacke_red },
  { name: "Red", hex: "#c0392b", image: red_seat },
  { name: "Gray", hex: "#7f8c8d", image: gray_black},
  { name: "Camel", hex: "#C19A6B", image: camel_black },
  { name: "Spl_Came", hex: "#B88A62", image: spl_camel },
  { name: "Light Browin", hex: "#B59982", image: lite_brown },
  { name: "Beige", hex: "#F5F5DC", image: beige_black },
  { name: "Spl_B.scotch", hex: "#D2A679", image: spi_b_scot },
  { name: "Fawn", hex: "#E5AA70", image: fawn_black },
  { name: "Maroon", hex: "#800000", image: maroon_black },
  { name: "L_TAN", hex: "#D2B48C", image: l_tan },
  { name: "White", hex: "#FFFFFF", image: white },
  { name: "Butter_Scotch", hex: "#E6C28B", image: butter_scot },
  { name: "Light_Beige", hex: "#F8F1E7", image: lite_bigen },
  { name: "Blue", hex: "#0000FF", image: blue_black },
  { name: "Light Grey", hex: "#D3D3D3", image: lite_gray },
  { name: "B_Tan", hex: "#A67B5B", image: b_ten_red },
  { name: "Dark_Brown", hex: "#654321", image:dark_brown_white },
  { name: "Off_White", hex: "#F8F8F0", image: off_white },
  { name: "Royal_Beige", hex: "#EDE0C8", image: royal_begin },
  { name: "Silver", hex: "#C0C0C0", image: sliver_brown },
  { name: "Mushroom", hex: "#BFAEA0", image: Mushroom },
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
        <h2 className="display-title-mat">Premium Seat Covers</h2>
        <p className="display-subtitle-mat">
          Choose the perfect seat cover design to enhance your car's comfort and style.
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
                alt={`${selectedColor.name} Seat Cover`}
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
