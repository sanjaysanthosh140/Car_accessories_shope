import React from "react";
import "./wind_speed.css";

import img1 from "../assets/v_seat/v_seat_1.webp";
import img2 from "../assets/v_seat/v_seat_2.webp";
import img3 from "../assets/v_seat/v_seat_3.webp";
import img4 from "../assets/v_seat/v_seat_4.webp";
import img5 from "../assets/v_seat/v_seat_5.webp";
import img6 from "../assets/v_seat/v_seat_6.webp";
import img7 from "../assets/v_seat/v_seat_7.webp";
import img8 from "../assets/v_seat/v_seat_8.webp";
import img9 from "../assets/v_seat/v_seat_9.webp";
import img11 from "../assets/v_seat/v_seat_10.webp";
import img12 from "../assets/v_seat/v_seat_11.webp";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img11,img12
];

export default function Ventilator_seat() {
  return (
    <div className="ps-page">
      <h1 className="ps-title">ventilated seat system</h1>

      <div className="ps-grid">
        {images.map((src, i) => (
          <div key={i} className="ps-card">
            <div className="ps-img-box">
              <img src={src} alt={`Product ${i+1}`} className="ps-img" />
              <div className="ps-glare"></div>
              <img src={src} alt="" className="ps-reflection" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
