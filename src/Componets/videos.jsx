// components/TripleVideoSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './video.css';

const TripleVideoSlider = () => {
  const [flipped, setFlipped] = useState([]);
  const sliderRefs = useRef([]);

  const toggleFlip = (id) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const videoCategories = [
    {
      category: 'Car Mats',
      videos: [
        {
          id: 1,
          title: 'Premium Car Mats Collection',
          about: 'Luxury car floor mats with custom fit',
          description: 'High-quality automotive floor protection',
          thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example1'
        },
        {
          id: 2,
          title: 'Custom Fit Mats',
          about: 'Perfect fit for your vehicle model',
          description: 'Tailored automotive floor solutions',
          thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example2'
        },
        {
          id: 3,
          title: 'All-Weather Protection',
          about: 'Durable mats for any season',
          description: 'Weather-resistant automotive flooring',
          thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example3'
        },
        {
          id: 4,
          title: 'Luxury Carpet Mats',
          about: 'Premium carpet floor protection',
          description: 'Soft and durable carpet mats',
          thumbnail: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example4'
        },
        {
          id: 5,
          title: 'Rubber Floor Mats',
          about: 'Heavy-duty rubber protection',
          description: 'Industrial strength floor mats',
          thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example5'
        }
      ]
    },
    {
      category: 'Car Accessories',
      videos: [
        {
          id: 6,
          title: 'Interior Enhancement',
          about: 'Upgrade your car interior',
          description: 'Premium interior accessories collection',
          thumbnail: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example6'
        },
        {
          id: 7,
          title: 'Exterior Styling',
          about: 'Make your car stand out',
          description: 'Exterior enhancement accessories',
          thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example7'
        },
        {
          id: 8,
          title: 'Performance Parts',
          about: 'Boost your car performance',
          description: 'High-performance automotive parts',
          thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example8'
        },
        {
          id: 9,
          title: 'Lighting Solutions',
          about: 'LED lighting for your vehicle',
          description: 'Modern lighting accessories',
          thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example9'
        },
        {
          id: 10,
          title: 'Audio Systems',
          about: 'Premium car audio solutions',
          description: 'High-quality sound systems',
          thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example10'
        }
      ]
    },
    {
      category: 'Installation Guides',
      videos: [
        {
          id: 11,
          title: 'Easy Installation Tips',
          about: 'Step-by-step installation guide',
          description: 'Professional installation tutorials',
          thumbnail: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example11'
        },
        {
          id: 12,
          title: 'Maintenance Guide',
          about: 'Keep your accessories perfect',
          description: 'Essential maintenance tips',
          thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example12'
        },
        {
          id: 13,
          title: 'Troubleshooting',
          about: 'Common issues and solutions',
          description: 'Problem-solving guides',
          thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example13'
        },
        {
          id: 14,
          title: 'DIY Projects',
          about: 'Do-it-yourself installations',
          description: 'Easy DIY car projects',
          thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example14'
        },
        {
          id: 15,
          title: 'Professional Tips',
          about: 'Expert installation advice',
          description: 'Professional techniques',
          thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
          videoUrl: 'https://www.youtube.com/watch?v=example15'
        }
      ]
    }
  ];

  useEffect(() => {
    const autoScroll = () => {
      sliderRefs.current.forEach((slider, index) => {
        if (slider) {
          const scrollHeight = slider.scrollHeight;
          const clientHeight = slider.clientHeight;
          const maxScroll = scrollHeight - clientHeight;
          
          if (maxScroll > 0) {
            const currentScroll = slider.scrollTop;
            const newScroll = currentScroll >= maxScroll ? 0 : currentScroll + 1;
            slider.scrollTop = newScroll;
          }
        }
      });
    };

    const interval = setInterval(autoScroll, 50);
    return () => clearInterval(interval);
  }, []);

  const handleVideoClick = (videoId) => {
    // Handle video navigation
    console.log(`Navigating to video: ${videoId}`);
  };

  return (
    <section className="triple-video-slider-container">
      <header className="triple-slider-header">
        <h2 className="triple-slider-title">Our Video Collection</h2>
        <p className="triple-slider-subtitle">
          Discover our premium car accessories through detailed videos
        </p>
        <div className="title-underline"></div>
      </header>

      <div className="triple-slider-grid">
        {videoCategories.map((category, index) => (
          <div key={category.category} className="slider-column">
            <h3 className="category-title">{category.category}</h3>
            <div className="video-scroll-container" ref={(el) => (sliderRefs.current[index] = el)}>
              {category.videos.map((video) => (
                <article
                  key={video.id}
                  className={`video-card ${flipped.includes(video.id) ? 'flipped' : ''}`}
                  onClick={() => toggleFlip(video.id)}
                  style={{'--bg-image': `url(${video.thumbnail})`}}
                >
                  <div className="corner-brackets">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="card-inner">
                    <div className="card-front">
                      <div className="front-content">
                        <h3 className="card-title-front">{video.title}</h3>
                        <p className="card-about-front">{video.about}</p>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3 className="card-title-back">{video.title}</h3>
                      <button 
                        className="navigation-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoClick(video.id);
                        }}
                      >
                        Watch Video
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripleVideoSlider;