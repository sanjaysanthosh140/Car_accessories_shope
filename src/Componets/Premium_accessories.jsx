import React, { useState } from "react";
import "./Premium_accessories.css";

import img1 from "../assets/premium_accessories/img1.jpg";
import img2 from "../assets/premium_accessories/img2.jpg";
import img3 from "../assets/premium_accessories/img3.jpg";
import img4 from "../assets/premium_accessories/img4.jpg";
import img5 from "../assets/premium_accessories/img5.jpg";
import img6 from "../assets/premium_accessories/img6.jpg";
import img7 from "../assets/premium_accessories/img7.jpg";
import img8 from "../assets/premium_accessories/img8.jpg";
import img9 from "../assets/premium_accessories/img9.jpg";
import img10 from "../assets/premium_accessories/img10.jpg";

import img11 from "../assets/premium_accessories/img11.jpg";
import img12 from "../assets/premium_accessories/img12.jpg";
import img13 from "../assets/premium_accessories/img13.jpg";
import img14 from "../assets/premium_accessories/img14.jpg";
import img15 from "../assets/premium_accessories/img15.jpg";
import img16 from "../assets/premium_accessories/img16.jpg";
import img17 from "../assets/premium_accessories/img17.jpg";
import img18 from "../assets/premium_accessories/img18.jpg";
import img19 from "../assets/premium_accessories/img19.jpg";
import img20 from "../assets/premium_accessories/img20.jpg";
import img21 from "../assets/premium_accessories/img21.jpg";
import img22 from "../assets/premium_accessories/img22.jpg";
import img23 from "../assets/premium_accessories/img23.jpg";
import img24 from "../assets/premium_accessories/img24.jpg";
import img25 from "../assets/premium_accessories/img24.jpg";

import img26 from "../assets/premium_accessories/img26.jpg";
import img27 from "../assets/premium_accessories/img27.jpg";
import img28 from "../assets/premium_accessories/img28.jpg";
import img29 from "../assets/premium_accessories/img29.jpg";
import img30 from "../assets/premium_accessories/img30.jpg";
import img31 from "../assets/premium_accessories/img31.jpg";
import img32 from "../assets/premium_accessories/img32.jpg";
import img33 from "../assets/premium_accessories/img33.jpg";
import img34 from "../assets/premium_accessories/img34.jpg";
import img35 from "../assets/premium_accessories/img35.jpg";
import img36 from "../assets/premium_accessories/img36.jpg";
import img37 from "../assets/premium_accessories/img37.jpg";
import img38 from "../assets/premium_accessories/img38.jpg";
import img39 from "../assets/premium_accessories/img39.jpg";
import img40 from "../assets/premium_accessories/img40.jpg";
import img41 from "../assets/premium_accessories/img41.jpg";
import img42 from "../assets/premium_accessories/img42.jpg";
import img43 from "../assets/premium_accessories/img43.jpg";
import img44 from "../assets/premium_accessories/img44.jpg";
import img45 from "../assets/premium_accessories/img45.jpg";
import img46 from "../assets/premium_accessories/img46.jpg";
import img47 from "../assets/premium_accessories/img47.jpg";
import img48 from "../assets/premium_accessories/img48.jpg";
import img49 from "../assets/premium_accessories/img49.jpg";
import img50 from "../assets/premium_accessories/img50.jpg";
import img51 from "../assets/premium_accessories/img51.jpg";
import img52 from "../assets/premium_accessories/img52.jpg";
import img53 from "../assets/premium_accessories/img53.jpg";

const MasonryGallery = () => {
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
    img28,
    img27,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
  ];
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    if (selected !== null) {
      setSelected((selected + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selected !== null) {
      setSelected((selected - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="masonry-gallery-container" id="gallery">
      <div className="masonry-grid">
        {images.map((src, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={src}
              alt={`gallery-${index}`}
              className="gallery-image"
              onClick={() => setSelected(index)}
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="lightbox">
          <button className="nav-btn left" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={images[selected]}
            alt="enlarged"
            className="lightbox-image"
          />
          <button className="nav-btn right" onClick={nextImage}>
            &#10095;
          </button>
          <span className="close-btn" onClick={() => setSelected(null)}>
            &times;
          </span>

          {/* Thumbnail strip inside lightbox */}
          <div className="lightbox-thumbnails">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className={`thumb ${selected === i ? "active" : ""}`}
                onClick={() => setSelected(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
