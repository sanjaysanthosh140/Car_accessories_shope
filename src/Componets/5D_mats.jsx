import React from "react";
import "./5D_mats.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../assets/5D_mats/5D_Mats_1.webp";
import img2 from "../assets/5D_mats/5D_Mats_2.webp";
import img3 from "../assets/5D_mats/5D_Mats_3.webp";
//import img4 from "../assets/5D_mats/5D_Mats_4.webp";
import img5 from "../assets/5D_mats/5D_Mats_5.webp";
//import img6 from "../assets/5D_mats/5D_Mats_6.webp";
import img7 from "../assets/5D_mats/5D_Mats_7.webp";
//import img8 from "../assets/5D_mats/5D_Mats_8.webp";
import img9 from "../assets/5D_mats/5D_Mats_9.webp";
import img10 from "../assets/5D_mats/5D_Mats_10.webp";
import img11 from "../assets/5D_mats/5D_Mats_11.webp";
import img12 from "../assets/5D_mats/5D_Mats_12.webp";
import img13 from "../assets/5D_mats/5D_Mats_13.webp";
import img14 from "../assets/5D_mats/5D_Mats_14.webp";
import img15 from "../assets/5D_mats/5D_Mats_15.webp";
import img16 from "../assets/5D_mats/5D_Mats_16.webp";
import img19 from "../assets/5D_mats/5D_Mats_19.webp";
import img20 from "../assets/5D_mats/5D_Mats_20.webp";
import img21 from "../assets/5D_mats/5D_Mats_21.webp";
import img22 from "../assets/5D_mats/5D_Mats_22.webp";
import img23 from "../assets/5D_mats/5D_Mats_23.webp";
import img24 from "../assets/5D_mats/5D_Mats_24.webp";
import img25 from "../assets/5D_mats/5D_Mats_25.webp";
import img26 from "../assets/5D_mats/5D_Mats_26.webp";
import img27 from "../assets/5D_mats/5D_Mats_27.webp";
import img28 from "../assets/5D_mats/5D_Mats_28.webp";
import img29 from "../assets/5D_mats/5D_Mats_29.webp";

const images = [
  img1,img2,img3,img5,img7,img9,img10,
  img11,img12,img13,img14,img15,img16,img19,img20,
  img21,img22,img23,img24,img25,img26,img27,img28,img29
];

export default function Mats5D() {
  return (
    <div className="vinyl-page">
      <h1 className="vinyl-title">5D Mats Showcase</h1>
        <div className="vinyl-grid">
        {images.map((src, i) => (
          <div key={i} className="vinyl-card">
            <div className="vinyl-img-box">
              <LazyLoadImage
                src={src}
                alt={`5D Mat ${i + 1}`}
                effect="blur"
                className="vinyl-img"
              />
              <LazyLoadImage
                src={src}
                alt=""
                effect="blur"
                className="vinyl-reflection"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
