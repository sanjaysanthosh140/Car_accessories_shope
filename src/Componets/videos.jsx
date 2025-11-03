import React from "react";
import "./video.css";
import thumbnail_1 from "../assets/yt_thump_nail/car_yt_img8.webp";
import thumbnail_2 from "../assets/yt_thump_nail/spot_spoilr_yt_2.webp";
import thumbnail_3 from "../assets/yt_thump_nail/yt_car_5.webp";
import thumbnail_4 from "../assets/yt_thump_nail/car_img_4.webp";
import thumbnail_5 from "../assets/yt_thump_nail/yt_car_2.webp";
import thumbnail_6 from "../assets/yt_thump_nail/yt_car_img_6.webp";
import thumbnail_7 from "../assets/yt_thump_nail/yt_car.webp";
import thumbnail_8 from "../assets/yt_thump_nail/car_img_4.webp";
import thumbnail_9 from "../assets/yt_thump_nail/car_img_3.webp";
import thumbnail_10 from "../assets/yt_thump_nail/car_7_yt.webp";
import thumbnail_11 from "../assets/yt_thump_nail/audi_integor_work_yt.webp";
import thumbnail_12 from "../assets/yt_thump_nail/yt_stereo_android.webp";
const videos = [
  {
    id: 1,
    title: "Premium Car Mats",
    about: "Luxury custom-fit floor mats",
    thumbnail: thumbnail_1,
    videoUrl: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    title: "All-Weather Mats",
    about: "Durable weather-resistant mats",
    thumbnail:
      thumbnail_2,
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    title: "Rubber Floor Mats",
    about: "Heavy-duty rubber protection",
    thumbnail:
      thumbnail_3,
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: 4,
    title: "Luxury Carpet Mats",
    about: "Soft, premium carpet mats",
    thumbnail:
      thumbnail_4,
    videoUrl: "https://www.youtube.com/watch?v=example4",
  },
  {
    id: 5,
    title: "Tailored Fit Sets",
    about: "Perfect fit for every model",
    thumbnail:
      thumbnail_5,
    videoUrl: "https://www.youtube.com/watch?v=example5",
  },
  {
    id: 6,
    title: "Interior Styling",
    about: "Upgrade your car interior",
    thumbnail:
      thumbnail_6,
    videoUrl: "https://www.youtube.com/watch?v=example6",
  },
  {
    id: 7,
    title: "Exterior Accessories",
    about: "Make your car stand out",
    thumbnail:
      thumbnail_7,
    videoUrl: "https://www.youtube.com/watch?v=example7",
  },
  {
    id: 8,
    title: "Audio Systems",
    about: "High-quality sound upgrades",
    thumbnail:
      thumbnail_8,
    videoUrl: "https://www.youtube.com/watch?v=example8",
  },
  {
    id: 9,
    title: "LED Lighting",
    about: "Modern LED lighting solutions",
    thumbnail:
      thumbnail_9,
    videoUrl: "https://www.youtube.com/watch?v=example9",
  },
  {
    id: 10,
    title: "DIY Install Tips",
    about: "Step-by-step installation",
    thumbnail:
      thumbnail_10,
    videoUrl: "https://www.youtube.com/watch?v=example10",
  },
  {
    id: 11,
    title: "Maintenance Guide",
    about: "Keep accessories in top shape",
    thumbnail:
      thumbnail_11,
    videoUrl: "https://www.youtube.com/watch?v=example11",
  },
  {
    id: 12,
    title: "Pro Fitting Service",
    about: "Professional fitting & advice",
    thumbnail:
      thumbnail_12,
    videoUrl: "https://www.youtube.com/watch?v=example12",
  },
];

const VideoGrid = () => {
  const openVideo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="videos-section">
      <header className="videos-header">
        <h2 className="videos-title">Video Showcase</h2>
        <p className="videos-subtitle">
          Browse our curated set of videos demonstrating products and
          installations.
        </p>
        <div className="videos-underline" />
      </header>

      <div className="videos-grid" role="list">
        {videos.map((v) => (
          <article
            key={v.id}
            className="video-card"
            role="listitem"
            tabIndex={0}
            onClick={() => openVideo(v.videoUrl)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openVideo(v.videoUrl);
            }}
            style={{ ["--bg-image"]: `url(${v.thumbnail})` }}
            aria-label={`${v.title} - ${v.about}`}
          >
            <div className="video-card-content">
              <div className="video-meta">
                <h3 className="video-title">{v.title}</h3>
                <p className="video-about">{v.about}</p>
              </div>
              <div className="video-actions">
                <button
                  className="play-btn youtube"
                  onClick={(e) => {
                    e.stopPropagation();
                    openVideo(v.videoUrl);
                  }}
                  aria-label={`Play ${v.title}`}
                >
                  <svg
                    className="yt-icon"
                    viewBox="0 0 36 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="36"
                      height="24"
                      rx="5"
                      ry="5"
                      fill="#FF0000"
                    />
                    <path d="M14 7.5 L24 12 L14 16.5 Z" fill="#fff" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
