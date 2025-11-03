// components/TripleVideoSlider.jsx
import React from 'react';
import './video.css';

const videos = [
  { id: 1, title: 'Premium Car Mats', about: 'Luxury custom-fit floor mats', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example1' },
  { id: 2, title: 'All-Weather Mats', about: 'Durable weather-resistant mats', thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example2' },
  { id: 3, title: 'Rubber Floor Mats', about: 'Heavy-duty rubber protection', thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example3' },
  { id: 4, title: 'Luxury Carpet Mats', about: 'Soft, premium carpet mats', thumbnail: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example4' },
  { id: 5, title: 'Tailored Fit Sets', about: 'Perfect fit for every model', thumbnail: 'https://images.unsplash.com/photo-1563720223313-0b5b6b1d0fcb?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example5' },
  { id: 6, title: 'Interior Styling', about: 'Upgrade your car interior', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example6' },
  { id: 7, title: 'Exterior Accessories', about: 'Make your car stand out', thumbnail: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example7' },
  { id: 8, title: 'Audio Systems', about: 'High-quality sound upgrades', thumbnail: 'https://images.unsplash.com/photo-1518441902113-7f2f7f5d7a9b?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example8' },
  { id: 9, title: 'LED Lighting', about: 'Modern LED lighting solutions', thumbnail: 'https://images.unsplash.com/photo-1470115636492-6d2b56f91453?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example9' },
  { id: 10, title: 'DIY Install Tips', about: 'Step-by-step installation', thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example10' },
  { id: 11, title: 'Maintenance Guide', about: 'Keep accessories in top shape', thumbnail: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example11' },
  { id: 12, title: 'Pro Fitting Service', about: 'Professional fitting & advice', thumbnail: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200', videoUrl: 'https://www.youtube.com/watch?v=example12' }
];

const VideoGrid = () => {
  const openVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="videos-section">
      <header className="videos-header">
        <h2 className="videos-title">Video Showcase</h2>
        <p className="videos-subtitle">Browse our curated set of videos demonstrating products and installations.</p>
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
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openVideo(v.videoUrl); }}
            style={{ ['--bg-image']: `url(${v.thumbnail})` }}
            aria-label={`${v.title} - ${v.about}`}
          >
            <div className="video-card-content">
              <div className="video-meta">
                <h3 className="video-title">{v.title}</h3>
                <p className="video-about">{v.about}</p>
              </div>
              <div className="video-actions">
                <button
                  className="play-btn"
                  onClick={(e) => { e.stopPropagation(); openVideo(v.videoUrl); }}
                  aria-label={`Play ${v.title}`}
                >
                  ▶
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