import React from "react";
import "./video.css";
import thumbnail_1 from "../assets/yt_thump_nail/car_yt_img8.webp";
import thumbnail_2 from "../assets/yt_thump_nail/spot_spoilr_yt_2.webp";
import thumbnail_3 from "../assets/yt_thump_nail/yt_car_5.webp";
import thumbnail_4 from "../assets/yt_thump_nail/car_img_4.webp";
import thumbnail_5 from "../assets/yt_thump_nail/yt_car_2.webp";
import thumbnail_6 from "../assets/yt_thump_nail/yt_car_img_6.webp";
import thumbnail_7 from "../assets/yt_thump_nail/yt_car.webp";
import thumbnail_8 from "../assets/yt_thump_nail/yt_stereo_android..webp";
import thumbnail_9 from "../assets/yt_thump_nail/car_img_3.webp";
import thumbnail_10 from "../assets/yt_thump_nail/car_7_yt.webp";
import thumbnail_11 from "../assets/yt_thump_nail/audi_integor_work_yt.webp";
import thumbnail_12 from "../assets/yt_thump_nail/yt_stereo_android.webp";
const videos = [
  {
    id: 1,
    title: "About as",
    about: "Luxury custom-fit floor mats",
    thumbnail: thumbnail_5,
    videoUrl: "https://youtube.com/shorts/m4YJrUWE0nI?si=a6vIdZ8jMn6IpX1U",
  },
  {
    id: 2,
    title: "Android",
    about: "Durable weather-resistant mats",
    thumbnail: thumbnail_10,
    videoUrl: "https://youtu.be/N5mixFGD-Bo?si=rPnNXL8mWVQApXqX",
  },
  {
    id: 3,
    title: "360 camara android stereo",
    about: "Heavy-duty rubber protection",
    thumbnail: thumbnail_3,
    videoUrl: "https://youtu.be/nkOubEjyjHY?si=fWvMqwz8Nqvzzbbd",
  },
  {
    id: 4,
    title: "7D MATS",
    about: "Soft, premium carpet mats",
    thumbnail: thumbnail_12,
    videoUrl: "https://youtu.be/LP6tykOscjU?si=An0O2ZERm3R8mMXI",
  },
  {
    id: 5,
    title: "A/C WORK",
    about: "Perfect fit for every model",
    thumbnail: thumbnail_1,
    videoUrl: "https://youtu.be/vRW9q0Evu_8?si=qyodYi2voBAikkUg",
  },
  {
    id: 6,
    title: "7D MAT MANUFACTURING",
    about: "Upgrade your car interior",
    thumbnail: thumbnail_6,
    videoUrl: "https://youtu.be/LP6tykOscjU?si=An0O2ZERm3R8mMXI",
  },
  {
    id: 7,
    title: "Under seat sub",
    about: "Make your car stand out",
    thumbnail: thumbnail_7,
    videoUrl: ":https://youtu.be/GkhCbbOCYu4?si=Ng9r90jdzV57-gaY",
  },
  {
    id: 8,
    title: "Android stereo",
    about: "High-quality sound upgrades",
    thumbnail: thumbnail_8,
    videoUrl: "https://youtu.be/57YS8nBhKEk?si=_stYKRH9coILLKuw",
  },
  {
    id: 9,
    title: "Get Attractive Offers and Discounts",
    about: "Modern LED lighting solutions",
    thumbnail: thumbnail_9,
    videoUrl: "https://youtu.be/5jyWulZGc5I?si=fyuMDBLumymdFeZP",
  },
  {
    id: 10,
    title: "spoiler caraccessories",
    about: "Step-by-step installation",
    thumbnail: thumbnail_2,
    videoUrl: "https://youtu.be/7bebOveOk7E?si=B1rm-zN5zTuq_6He",
  },
  {
    id: 11,
    title: "Seat Covers",
    about: "Keep accessories in top shape",
    thumbnail: thumbnail_11,
    videoUrl: "https://youtube.com/shorts/m4YJrUWE0nI?si=a6vIdZ8jMn6IpX1U",
  },
  {
    id: 12,
    title: "Car 360 degree camera",
    about: "Professional fitting & advice",
    thumbnail: thumbnail_4,
    videoUrl: "https://youtu.be/kCBJ5MsOTjc?si=k2JgkCyBuG65Yqe6 ",
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
                {/* <p className="video-about">{v.about}</p> */}
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
