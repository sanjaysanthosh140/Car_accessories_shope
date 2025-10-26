import React, { useState } from "react";
import "./Car_mat.css";

// Import your seat cover images.
import red_seat from "../assets/mats/image_1.jpg";
import Deep_Brown from "../assets/mats/image_31.jpg";
import Cream_Beige from "../assets/mats/image_6.jpg";
import Jet_Black1 from "../assets/mats/image_39.jpg";
import Jet_Black2 from "../assets/mats/image_38.jpg";
import Tan from "../assets/mats/image_29.jpg";
import Rust_Brown from "../assets/mats/image_46.jpg";
import Charcoal_Black from "../assets/mats/image_37.jpg";
import Charcoal_Black2 from "../assets/mats/image_32.jpg";
import Deep_Maroon from "../assets/mats/image_36.jpg";
import Dark_Charcoal from "../assets/mats/image_25.jpg";
import Jet_Black3 from "../assets/mats/image_2.jpg";
import Deep_Maroon2 from "../assets/mats/image_43.jpg";
import jetblack_4 from "../assets/mats/image_26.jpg";
import charcoal_gray from "../assets/mats/image_22.jpg";
import Dark_Charcoal_3 from "../assets/mats/image_17.jpg";
import jet_black_3 from "../assets/mats/image_18.jpg";
import Deep_Maroon_3 from "../assets/mats/image_33.jpg";
import Charcoal_gray2 from "../assets/mats/image_41.jpg";
import Jet_Black_4 from "../assets/mats/image_15.jpg";
 import dark_carcoal_4 from "../assets/mats/image_3.jpg";
 import Charcoal_Black_3 from "../assets/mats/image_16.jpg";
 import Cream_Beige_2 from "../assets/mats/image_10.jpg";
import Dark_Charcoal_5 from "../assets/mats/image_34.jpg";
 import Jet_Black_5 from "../assets/mats/image_4.jpg";
 import Light_Taupe_1 from "../assets/mats/image_40.jpg";
import Charcoal_Gray_3 from "../assets/mats/image_8.jpg";
 import Tan_2 from "../assets/mats/image_13.jpg";
 import Deep_Maroon_4 from "../assets/mats/image_7.jpg";
 import Rust_Brown_2 from "../assets/mats/image_12.jpg";
 import Light_Taupse_2 from "../assets/mats/image_14.jpg";
 import Light_Taupe_3 from "../assets/mats/image_30.jpg";
 import Charcoal_Gray_4 from "../assets/mats/image_35.jpg";
import Deep_Maroon_5 from "../assets/mats/image_9.jpg";
import Dark_Charcoal_6 from "../assets/mats/image_5.jpg";
 import Charcoal_Black_4 from "../assets/mats/image_28.jpg";
import Charcoal_Black_6 from "../assets/mats/image_24.jpg";
import Charcoal_Gray_5 from "../assets/mats/image_20.jpg";
import black_gray from "../assets/mats/image_11.jpg";
import Charcoal_Black_7 from "../assets/mats/image_21.jpg";
import Deep_Maroon_6 from "../assets/mats/image_19.jpg";
import Cream_Beige_3 from "../assets/mats/image_27.jpg";
import Cream_Beige_5  from "../assets/mats/image_44.jpg";
import Charcoal_Black_8 from "../assets/mats/image_42.jpg";
import Charcoal_Black_9 from "../assets/mats/image_45.jpg";
// import Jet_Black_4 from "../assets/mats/image_.jpg";
// import Jet_Black_4 from "../assets/mats/image_.jpg";
// 

const colors = [
  { name: "Charcoal Black", hex: "#2A2E31", image: red_seat },
  { name: "Deep Brown", hex: "#3C2329", image: Deep_Brown },
  { name: "Cream Beige", hex: "#e0dccdd5", image: Cream_Beige },
  { name: "Jet Black_1", hex: "#0F0F0F", image: Jet_Black1 },
  { name: "Jet Black_dark", hex: "#151515", image: Jet_Black2 },
  { name: "Tan", hex: "#A3643E", image: Tan },
  { name: "Rust Brown", hex: "#8a3510ff", image: Rust_Brown },
  { name: "Charcoal Black_1", hex: "#26292D", image: Charcoal_Black },
  { name: "Charcoal Black_2", hex: "#26272B", image: Charcoal_Black2 },
  { name: "Dark Charcoal_1", hex: "#282D32", image: Deep_Maroon },
  { name: "Dark Charcoal_2", hex: "#282D32", image: Dark_Charcoal },
  { name: "Jet Black_2", hex: "#151515", image: Jet_Black3 },
  { name: "Deep Maroon2", hex: "#3B1F25", image: Deep_Maroon2 },
  { name: "Jet Black4", hex: "#1D1F23", image: jetblack_4 },
  { name: "Charcoal Gray_1", hex: "#2B3037", image: charcoal_gray },
  { name: "Dark Charcoal_3", hex: "#22262B", image: Dark_Charcoal_3 },
  { name: "Jet Black_3", hex: "#0F0F0F", image: jet_black_3 },
  { name: "Deep Maroon_3", hex: "#401E27", image: Deep_Maroon_3 },
  { name: "Charcoal Gray_2", hex: "#2D323A", image: Charcoal_gray2  },
  { name: "Jet Black_4", hex: "#151515", image: Jet_Black_4  },
  { name: "Dark Charcoal_4", hex: "#272A2E", image: dark_carcoal_4 },
  { name: "Charcoal Black_3", hex: "#23262B", image: Charcoal_Black_3  },
  { name: "Cream Beige_2", hex: "#E1DCCD", image: Cream_Beige_2},
  { name: "Dark Charcoal_5", hex: "#262A2E", image: Dark_Charcoal_5 },
  { name: "Jet Black_5", hex: "#1A1A1B", image: Jet_Black_5},
  { name: "Light Taupe_1", hex: "#B2A99B", image: Light_Taupe_1 },
  { name: "Charcoal Gray_3", hex: "#2B3037", image: Charcoal_Gray_3 },
  { name: "Tan_2", hex: "#A96F4B", image: Tan_2 },
  { name: "Deep Maroon_4", hex: "#3f19214e", image: Deep_Maroon_4 },
  { name: "Rust Brown", hex: "#A75A39", image: Rust_Brown_2  },
  { name: "Light Taupe_2", hex: "#B9B1A4", image: Light_Taupse_2 },
  { name: "Light Taupe_3", hex: "#B3A99B", image: Light_Taupe_3  },
  { name: "Charcoal Gray_4", hex: "#2F3337", image: Charcoal_Gray_4 },
  { name: "Deep Maroon_5", hex: "#401E25", image: Deep_Maroon_5},
  { name: "Dark Charcoal_6", hex: "#2A2D31", image: Dark_Charcoal_6  },
  { name: "Charcoal Black_4", hex: "#202429", image: Charcoal_Black_4  },
  { name: "Charcoal Black_6", hex: "#22262B", image: Charcoal_Black_6  },
  { name: "Charcoal Gray_5", hex: "#303337", image: Charcoal_Gray_5 },
  { name: "black_gray", hex: "#151516", image: black_gray },
  { name: "Charcoal Black_7", hex: "#24272B", image: Charcoal_Black_7  },
  { name: "Deep Maroon_6", hex: "#3B1F25", image: Deep_Maroon_6 },
  { name: "Light Taupe_4", hex: "#B9B1A4", image: Cream_Beige_3  },
  { name: "Light Taupe_5", hex: "#B9B1A4", image: Cream_Beige_5  },
  { name: "Charcoal Black_8", hex: "#272A2E", image: Charcoal_Black_8 },
  { name: "Charcoal Black_9", hex: "#192029ff", image: Charcoal_Black_9 },
  
 
];

// ...existing imports...

const CarMatDisplay = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleColorChange = (color) => {
    setIsAnimating(true);
    setSelectedColor(color);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="car-mat-display-section">
      <div className="content-wrapper">
        <header className="display-header">
          <h1>Premium Car Seat Covers</h1>
          <p>Customize your car's interior with our premium selection</p>
        </header>

        <div className="display-layout">
          <div className="preview-section">
            <div className="image-viewer">
              <div className={`image-container ${isAnimating ? "fade" : ""}`}>
                <img
                  src={selectedColor.image}
                  alt={`${selectedColor.name} car seat`}
                  className="preview-image"
                />
              </div>
              <div className="selected-color-info">
                <span
                  className="color-dot"
                  style={{ backgroundColor: selectedColor.hex }}
                ></span>
                <span className="color-name">{selectedColor.name}</span>
              </div>
            </div>
          </div>

          <div className="colors-section">
            <div className="colors-header">
              <h2>Available Colors</h2>
              <p>{colors.length} premium options</p>
            </div>

            <div className="colors-grid">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`color-option ${
                    selectedColor.name === color.name ? "selected" : ""
                  }`}
                  onClick={() => handleColorChange(color)}
                >
                  <span
                    className="color-preview"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                  <span className="color-label">{color.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarMatDisplay;
