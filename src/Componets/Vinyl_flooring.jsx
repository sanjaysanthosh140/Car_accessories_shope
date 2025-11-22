import React, { useState, useMemo } from "react";
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

const ALL_IMAGES = [img1,img2,img3,img4,img5,img6,img7,img8,img9];

export default function VinylFlooring(){
  const initial = useMemo(() => ALL_IMAGES.slice(), []);
  const [cardImages, setCardImages] = useState(initial);
  const [flipping, setFlipping] = useState(() => new Array(initial.length).fill(false));

  const handleClick = (idx) => {
    setFlipping((s) => { const ns = s.slice(); ns[idx] = true; return ns; });

    setTimeout(() => {
      setCardImages((imgs) => {
        const current = imgs[idx];
        const pos = ALL_IMAGES.indexOf(current);
        const next = ALL_IMAGES[(pos + 1) % ALL_IMAGES.length];
        const copy = imgs.slice();
        copy[idx] = next;
        return copy;
      });

      setTimeout(() => {
        setFlipping((s) => { const ns = s.slice(); ns[idx] = false; return ns; });
      }, 260);
    }, 160);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-grid">
        {cardImages.map((src, idx)=> (
          <article key={idx} className={`glass-card image-only ${flipping[idx] ? 'flipping' : ''}`} onClick={() => handleClick(idx)} role="button" tabIndex={0} onKeyDown={(e)=> e.key==="Enter" && handleClick(idx)} aria-label={`show next image ${idx + 1}`}>
            <div className="glass-image-wrap">
              <img src={src} alt={`Vinyl ${idx + 1}`} onError={(e) => { e.currentTarget.style.opacity = 0.12; e.currentTarget.nextSibling.style.display='flex' }} />
              <div className="no-image">Image not found<br/>{src}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
