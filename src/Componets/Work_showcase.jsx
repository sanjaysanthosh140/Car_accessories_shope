import React, { useState, useEffect } from "react";
import "./Work_showcase.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../assets/seats_1.webp";
// import img2 from "../assets/seats_2.webp";
import img3 from "../assets/seats_3.webp";
// import img4 from "../assets/seats_4.webp"; .
import img5 from "../assets/seats_5.webp";
import img6 from "../assets/seats_6.webp";
import img7 from "../assets/seats_7.webp";
import img8 from "../assets/seats_8.webp";
import img9 from "../assets/seats_9.webp";
import img10 from "../assets/seats_10.webp";
import img11 from "../assets/seats_11.webp";
import img12 from "../assets/seats_12.webp";
// import img13 from "../assets/seats_13.webp"; 12
// import img14 from "../assets/seats_14.webp"; 13
import img15 from "../assets/seats_15.webp";
import img16 from "../assets/seats_16.webp";
import img17 from "../assets/seats_17.webp";
import img18 from "../assets/seats_18.webp";
import img19 from "../assets/seats_19.webp";
import img20 from "../assets/seats_20.webp";
// import img21 from "../assets/seats_21.webp";
// import img22 from "../assets/seats_22.webp";
import img23 from "../assets/seats_23.webp";
import img24 from "../assets/seats_24.webp";
import img25 from "../assets/seats_25.webp";
import img26 from "../assets/seats_26.webp";
import img27 from "../assets/seats_27.webp";
import img28 from "../assets/seats_28.webp";
// import img29 from "../assets/seats_29.webp";
import img30 from "../assets/seats_30.webp";
import img31 from "../assets/seats_31.webp";
// import img32 from "../assets/seats_32.webp";
import img33 from "../assets/seats_33.webp";

import img34 from "../assets/seats_34.webp";
import img35 from "../assets/seats_35.webp";
import img36 from "../assets/seats_36.webp";
import img37 from "../assets/seats_37.webp";
import img38 from "../assets/seats_38.webp";
import img39 from "../assets/seats_39.webp";
import img40 from "../assets/seats_40.webp";
// import img41 from "../assets/seats_41.webp";
// import img42 from "../assets/seats_42.webp";
// import img43 from "../assets/seats_43.webp";
import img44 from "../assets/seats_44.webp";
// import img45 from "../assets/seats_45.webp"; 44
// import img46 from "../assets/seats_46.webp";
import img47 from "../assets/seats_47.webp";
import img48 from "../assets/seats_48.webp";
// import img49 from "../assets/seats_49.webp";
// import img50 from "../assets/seats_50.webp"; 49
// import img51 from "../assets/seats_51.webp";
import img52 from "../assets/seats_52.webp";
import img53 from "../assets/seats_53.webp";
import img54 from "../assets/seats_54.webp";
// import img55 from "../assets/seats_55.webp";
// import img56 from "../assets/seats_56.webp";
import img57 from "../assets/seats_57.webp";
import img58 from "../assets/seats_58.webp";
import img59 from "../assets/seats_59.webp";

const WorkShowcase = () => {
  const images = [
    img1,
    // img2,
    img3,
    // img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    // img13,
    // img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    // img21,
    // img22,
    img23,
    img24,
    img25,
    img26,
    // img27,
    img28,
    // img29,
    // img30,
    img31,
    // img32,
    // img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    // img40,
    // img41,
    // img42,
    // img43,
    img44,
    // img45,
    // img46,
    // img47,
    img48,
    // img49,
    // img50,
    // img51,
    img52,
    img53,
    img54,
    // img55,
    // img56,
    img57,
    img58,
    img59,
  ];

  return (
    <div className="showcase-container">
      <div className="showcase-grid">
        {images.map((img, index) => (
          <div key={index} className="showcase-card">
            <div className="card-inner">
              <div className="showcase-image-container">
                <LazyLoadImage
                  src={img}
                  // alt={`Showcase ${index + 1}`}
                  className="showcase-image"
                  effect="blur"          // smooth blur effect
                  loading="lazy"
                  threshold={200}        // loads when near viewport
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
