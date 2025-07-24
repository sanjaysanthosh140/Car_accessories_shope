import React from 'react'
import './CategorySection.css'

const categories = [
  {
    title: 'Premium Car Floor Mats',
    desc: "Protect your vehicle's interior with our durable floor mats.",
  },
  {
    title: 'High-Performance Dash Cam',
    desc: 'Capture every moment on the road with crystal-clear video.',
  },
  {
    title: 'Stylish Steering Wheel Cover',
    desc: "Upgrade your car's interior with our chic steering wheel cover.",
  }
]

const CategorySection = () => {
  return (
    <section className="category-section">
      <p className="category-subheading">Discover</p>
      <h2 className="category-heading">Top Picks for Your Car Accessories</h2>
      <p className="category-description">
        Explore our handpicked selection of car accessories designed to enhance your driving
        experience. From stylish interiors to cutting-edge electronics, we have everything you need.
      </p>

      <div className="category-cards">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-image-placeholder" />
            <h3 className="category-title">{item.title}</h3>
            <p className="category-text">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="category-buttons">
        <button className="btn-outline">Shop</button>
        <button className="btn-arrow">
          Learn More <span className="arrow">→</span>
        </button>
      </div>
    </section>
  )
}

export default CategorySection
