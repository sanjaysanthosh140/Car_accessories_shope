import React, { useState } from "react";
import "./Premium_accessories.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../assets/premium_accessories/img1.webp";
import img2 from "../assets/premium_accessories/img2.webp";
import img3 from "../assets/premium_accessories/img3.webp";
import img4 from "../assets/premium_accessories/img4.webp";
import img5 from "../assets/premium_accessories/img5.webp";
import img6 from "../assets/premium_accessories/img6.webp";
import img7 from "../assets/premium_accessories/img7.webp";
import img8 from "../assets/premium_accessories/img8.webp";
import img9 from "../assets/premium_accessories/img9.webp";
import img10 from "../assets/premium_accessories/img10.webp";

import img11 from "../assets/premium_accessories/img11.webp";
import img12 from "../assets/premium_accessories/img12.webp";
import img13 from "../assets/premium_accessories/img13.webp";
import img14 from "../assets/premium_accessories/img14.webp";
import img15 from "../assets/premium_accessories/img15.webp";
import img16 from "../assets/premium_accessories/img16.webp";
import img17 from "../assets/premium_accessories/img17.webp";
import img18 from "../assets/premium_accessories/img18.webp";
import img19 from "../assets/premium_accessories/img19.webp";
import img20 from "../assets/premium_accessories/img20.webp";
import img21 from "../assets/premium_accessories/img21.webp";
import img22 from "../assets/premium_accessories/img22.webp";
import img23 from "../assets/premium_accessories/img23.webp";
import img24 from "../assets/premium_accessories/img24.webp";
import img25 from "../assets/premium_accessories/img24.webp";

import img26 from "../assets/premium_accessories/img26.webp";
import img27 from "../assets/premium_accessories/img27.webp";
import img28 from "../assets/premium_accessories/img28.webp";
import img29 from "../assets/premium_accessories/img29.webp";
import img30 from "../assets/premium_accessories/img30.webp";
import img31 from "../assets/premium_accessories/img31.webp";
import img32 from "../assets/premium_accessories/img32.webp";
import img33 from "../assets/premium_accessories/img33.webp";
import img34 from "../assets/premium_accessories/img34.webp";
import img35 from "../assets/premium_accessories/img35.webp";
import img36 from "../assets/premium_accessories/img36.webp";
import img37 from "../assets/premium_accessories/img37.webp";
import img38 from "../assets/premium_accessories/img38.webp";
import img39 from "../assets/premium_accessories/img39.webp";
import img40 from "../assets/premium_accessories/img40.webp";
import img41 from "../assets/premium_accessories/img41.webp";
import img42 from "../assets/premium_accessories/img42.webp";
import img43 from "../assets/premium_accessories/img43.webp";
import img44 from "../assets/premium_accessories/img44.webp";
import img45 from "../assets/premium_accessories/img45.webp";
import img46 from "../assets/premium_accessories/img46.webp";
import img47 from "../assets/premium_accessories/img47.webp";
import img48 from "../assets/premium_accessories/img48.webp";
import img49 from "../assets/premium_accessories/img49.webp";
import img50 from "../assets/premium_accessories/img50.webp";
import img51 from "../assets/premium_accessories/img51.webp";
import img52 from "../assets/premium_accessories/img52.webp";
import img53 from "../assets/premium_accessories/img53.webp";

import img54 from "../assets/premium_accessories/img54.webp";
import img55 from "../assets/premium_accessories/img55.webp";
import img56 from "../assets/premium_accessories/img56.webp";
import img57 from "../assets/premium_accessories/img57.webp";
import img58 from "../assets/premium_accessories/img58.webp";
import img59 from "../assets/premium_accessories/img59.webp";
import img60 from "../assets/premium_accessories/img60.webp";
import img61 from "../assets/premium_accessories/img61.webp";
import img62 from "../assets/premium_accessories/img62.webp";
import img63 from "../assets/premium_accessories/img63.webp";
import img64 from "../assets/premium_accessories/img64.webp";
import img65 from "../assets/premium_accessories/img65.webp";
import img66 from "../assets/premium_accessories/img66.webp";
import img67 from "../assets/premium_accessories/img67.webp";
import img68 from "../assets/premium_accessories/img68.webp";
import img69 from "../assets/premium_accessories/img69.webp";
import img70 from "../assets/premium_accessories/img70.webp";
import img71 from "../assets/premium_accessories/img71.webp";
import img72 from "../assets/premium_accessories/img72.webp";
import img73 from "../assets/premium_accessories/img73.webp";
import img74 from "../assets/premium_accessories/img74.webp";
import img75 from "../assets/premium_accessories/img75.webp";
import img76 from "../assets/premium_accessories/img76.webp";
import img77 from "../assets/premium_accessories/img77.webp";
import img78 from "../assets/premium_accessories/img78.webp";
import img79 from "../assets/premium_accessories/img79.webp";

import img80 from "../assets/premium_accessories/img80.webp";
import img95 from "../assets/premium_accessories/img95.webp";
import img96 from "../assets/premium_accessories/img96.webp";
import img97 from "../assets/premium_accessories/img97.webp";
import img98 from "../assets/premium_accessories/img98.webp";
import img99 from "../assets/premium_accessories/img99.webp";
import img100 from "../assets/premium_accessories/img100.webp";
import img101 from "../assets/premium_accessories/img101.webp";
import img102 from "../assets/premium_accessories/img102.webp";
import img103 from "../assets/premium_accessories/img103.webp";
import img104 from "../assets/premium_accessories/img104.webp";
import img105 from "../assets/premium_accessories/img105.webp";
import img106 from "../assets/premium_accessories/img106.webp";
import img107 from "../assets/premium_accessories/img107.webp";
import img108 from "../assets/premium_accessories/img108.webp";
import img109 from "../assets/premium_accessories/img109.webp";
import img110 from "../assets/premium_accessories/img110.webp";
import img111 from "../assets/premium_accessories/img111.webp";
import img112 from "../assets/premium_accessories/img112.webp";
import img113 from "../assets/premium_accessories/img113.webp";
import img114 from "../assets/premium_accessories/img114.webp";
import img115 from "../assets/premium_accessories/img115.webp";
import img116 from "../assets/premium_accessories/img116.webp";
import img117 from "../assets/premium_accessories/img117.webp";
import img118 from "../assets/premium_accessories/img118.webp";
import img119 from "../assets/premium_accessories/img119.webp";
import img120 from "../assets/premium_accessories/img120.webp";
import img121 from "../assets/premium_accessories/img121.webp";
import img122 from "../assets/premium_accessories/img122.webp";
import img123 from "../assets/premium_accessories/img123.webp";
import img124 from "../assets/premium_accessories/img124.webp";
import img125 from "../assets/premium_accessories/img125.webp";
import img126 from "../assets/premium_accessories/img126.webp";
import img127 from "../assets/premium_accessories/img127.webp";
import img128 from "../assets/premium_accessories/img128.webp";
import img129 from "../assets/premium_accessories/img129.webp";

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
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72,
    img73,
    img74,
    img75,
    img76,
    img77,
    img78,
    img79,
    img80,
    img95,
    img96,
    img97,
    img98,
    img99,
    img100,
    img101,
    img102,
    img103,
    img104,
    img105,
    img106,
    img107,
    img108,
    img109,
    img110,
    img111,
    img112,
    img113,
    img114,
    img115,
    img116,
    img117,
    img118,
    img119,
    img120,
    img121,
    img122,
    img123,
    img124,
    img125,
    img126,
    img127,
    img128,
    img129,
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
