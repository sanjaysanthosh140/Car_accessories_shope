import React, { useState } from "react";
import "./Gallery.css";
import img1 from "../assets/seats_1.jpg";
import img2 from "../assets/seats_2.jpg";
import img3 from "../assets/seats_3.jpg";
import img4 from "../assets/seats_4.jpg";
import img5 from "../assets/seats_5.jpg";
import img6 from "../assets/seats_6.jpg";
import img7 from "../assets/seats_7.jpg";
import img8 from "../assets/seats_8.jpg";
import img9 from "../assets/seats_9.jpg";
import img10 from "../assets/seats_10.jpg";
import img11 from "../assets/seats_11.jpg";
import img12 from "../assets/seats_12.jpg";
import img13 from "../assets/seats_13.jpg";
import img14 from "../assets/seats_14.jpg";
const Gallery = () => {
  const images = [
    img1,
    img2,
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
  ];
  const [selected, setSelected] = useState(0);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container" id="gallery">
      <div className="thumbnail-column">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`thumbnail ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>

      <div className="main-image-section">
        <button className="nav-btn left" onClick={prevImage}>
          &#10094;
        </button>
        <img src={images[selected]} alt="main display" className="main-image" />
        <button className="nav-btn right" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
