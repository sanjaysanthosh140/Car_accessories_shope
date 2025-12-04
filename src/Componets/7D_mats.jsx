import React, { useState, useMemo } from "react";
import "./7D_mats.css";

import img1 from "../assets/7D_mats/7D_mats_1.webp";
import img2 from "../assets/7D_mats/7D_mats_2.webp";
import img3 from "../assets/7D_mats/7D_mats_3.webp";
//import img4 from "../assets/7D_mats/7D_mats_4.webp";
import img5 from "../assets/7D_mats/7D_mats_5.webp";
import img6 from "../assets/7D_mats/7D_mats_6.webp";
//import img7 from "../assets/7D_mats/7D_mats_7.webp";
//import img8 from "../assets/7D_mats/7D_mats_8.webp";
import img9 from "../assets/7D_mats/7D_mats_9.webp";
import img10 from "../assets/7D_mats/7D_mats_10.webp";
import img11 from "../assets/7D_mats/7D_mats_11.webp";
import img12 from "../assets/7D_mats/7D_mats_12.webp";
import img13 from "../assets/7D_mats/7D_mats_13.webp";
import img14 from "../assets/7D_mats/7D_mats_14.webp";
//import img15 from "../assets/7D_mats/7D_mats_15.webp";
//import img16 from "../assets/7D_mats/7D_mats_16.webp";
import img17 from "../assets/7D_mats/7D_mats_17.webp";
import img18 from "../assets/7D_mats/7D_mats_18.webp";
import img19 from "../assets/7D_mats/7D_mats_19.webp";
//import img20 from "../assets/7D_mats/7D_mats_20.webp";
import img21 from "../assets/7D_mats/7D_mats_21.webp";
import img22 from "../assets/7D_mats/7D_mats_22.webp";
import img23 from "../assets/7D_mats/7D_mats_23.webp";
import img24 from "../assets/7D_mats/7D_mats_24.webp";
import img25 from "../assets/7D_mats/7D_mats_25.webp";
import img26 from "../assets/7D_mats/7D_mats_26.webp";
import img27 from "../assets/7D_mats/7D_mats_27.webp";
import img28 from "../assets/7D_mats/7D_mats_28.webp";
import img29 from "../assets/7D_mats/7D_mats_29.webp";
import img30 from "../assets/7D_mats/7D_mats_30.webp";

import img31 from "../assets/7D_mats/mat_img_31.webp";
import img32 from "../assets/7D_mats/mat_img_32.webp";
import img34 from "../assets/7D_mats/mat_img_34.webp";
import img35 from "../assets/7D_mats/mat_img_35.webp";
import img36 from "../assets/7D_mats/mat_img_36.webp";
import img37 from "../assets/7D_mats/mat_img_37.webp";
import img38 from "../assets/7D_mats/mat_img_38.webp";
import img39 from "../assets/7D_mats/mat_img_39.webp";
import img40 from "../assets/7D_mats/mat_img_40.webp";
import img41 from "../assets/7D_mats/mat_img_41.webp";
import img45 from "../assets/7D_mats/mat_img_45.webp";
import img48 from "../assets/7D_mats/mat_img_48.webp";
import img49 from "../assets/7D_mats/mat_img_49.webp";
import img50 from "../assets/7D_mats/mat_img_50.webp";
import img51 from "../assets/7D_mats/mat_img_51.webp";
import img52 from "../assets/7D_mats/mat_img_52.webp";
import img53 from "../assets/7D_mats/mat_img_53.webp";

const ALL_IMAGES = [
  img1,
  img2,
  img3,
  img5,
  img6,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img17,
  img18,
  img19,
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
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img45,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
];

export default function Mats7D() {
  return (
    <div className="gallery-page">
      <div className="gallery-grid">
        {ALL_IMAGES.map((src, idx) => (
          <div key={idx} className="card">
            <div className="cornerBrackets">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="cardImageWrap">
              <img src={src} alt={`7D mat ${idx + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
