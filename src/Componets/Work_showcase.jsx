import React, { useState, useEffect } from "react";
import "./Work_showcase.css";
import img1 from "../assets/seats_1.webp";
// import img2 from "../assets/seats_2.webp";
import img3 from "../assets/seats_3.webp";
import img4 from "../assets/seats_4.webp";
import img5 from "../assets/seats_5.webp";
import img6 from "../assets/seats_6.webp";
import img7 from "../assets/seats_7.webp";
import img8 from "../assets/seats_8.webp";
import img9 from "../assets/seats_9.webp";
import img10 from "../assets/seats_10.webp";
import img11 from "../assets/seats_11.webp";
import img12 from "../assets/seats_12.webp";
import img13 from "../assets/seats_13.webp";
import img14 from "../assets/seats_14.webp";
import img15 from "../assets/seats_15.webp";
import img16 from "../assets/seats_16.webp";
import img17 from "../assets/seats_17.webp";
import img18 from "../assets/seats_18.webp";
import img19 from "../assets/seats_19.webp";
import img20 from "../assets/seats_20.webp";
import img21 from "../assets/seats_21.webp";
import img22 from "../assets/seats_22.webp";
import img23 from "../assets/seats_23.webp";
import img24 from "../assets/seats_24.webp";
import img25 from "../assets/seats_25.webp";
import img26 from "../assets/seats_26.webp";
import img27 from "../assets/seats_27.webp";
import img28 from "../assets/seats_28.webp";
import img29 from "../assets/seats_29.webp";
import img30 from "../assets/seats_30.webp";
import img31 from "../assets/seats_31.webp";
import img32 from "../assets/seats_32.webp";
import img33 from "../assets/seats_33.webp";
const WorkShowcase = () => {
  const images = [
    img1,
    // img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
  ];

  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  return (
    <div className="showcase-container">
      <div className="showcase-grid">
        {images.map((img, index) => (
          <div key={index} className="showcase-card">
            <div className="card-inner">
              <div className="showcase-image-container">
                <img
                  src={img}
                  alt={`Showcase ${index + 1}`}
                  className={`showcase-image ${!loadedImages.has(index) ? 'loading-shimmer' : ''}`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
