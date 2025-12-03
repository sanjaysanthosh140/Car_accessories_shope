import React from "react";
import "./Vinyl_flooring.css";

import img1 from "../assets/Vinyl_flooring/Vinyl_flooring_1.webp";
import img2 from "../assets/Vinyl_flooring/Vinyl_flooring_2.webp";
import img3 from "../assets/Vinyl_flooring/Vinyl_flooring_3.webp";
import img4 from "../assets/Vinyl_flooring/Vinyl_flooring_4.webp";
import img5 from "../assets/Vinyl_flooring/Vinyl_flooring_5.webp";
import img6 from "../assets/Vinyl_flooring/Vinyl_flooring_6.webp";
import img7 from "../assets/Vinyl_flooring/Vinyl_flooring_7.webp";
import img8 from "../assets/Vinyl_flooring/Vinyl_flooring_8.webp";
import img9 from "../assets/Vinyl_flooring/Vinyl_flooring_9.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function VinylFlooring() {
  return (
    <div className="vinyl-page">
      <h1 className="vinyl-title">Vinyl Flooring</h1>

      <div className="vinyl-grid">
        {images.map((src, i) => (
          <div key={i} className="vinyl-card glass-card">
            <div className="vinyl-img-box">
              <img src={src} alt={`Vinyl ${i + 1}`} className="vinyl-img" />
              <img src={src} alt="" className="vinyl-reflection" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
