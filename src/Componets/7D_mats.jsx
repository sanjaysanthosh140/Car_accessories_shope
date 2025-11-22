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

const ALL_IMAGES = [
	img1,img2,img3,img5,img6,img9,img10,
	img11,img12,img13,img14,img17,img18,img19,
	img21,img22,img23,img24,img25,img26,img27,img28,img29,img30
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
