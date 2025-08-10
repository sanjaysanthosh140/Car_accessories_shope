// PremiumProductCard.jsx
import React from 'react';
import './Carts.css';

const PremiumProductCard = () => {
  const products = [
    {
      id: 1,
      name: 'Carbon Fiber Steering Wheel',
      image: 'https://picsum.photos/id/300/400/550',
      price: 599.99,
      description: 'Lightweight and durable with an ergonomic design for ultimate grip.',
    },
    {
      id: 2,
      name: 'LED Matrix Headlights',
      image: 'https://picsum.photos/id/301/400/550',
      price: 1200.00,
      description: 'Adaptive lighting technology for superior visibility and style.',
    },
    {
      id: 3,
      name: 'Performance Exhaust System',
      image: 'https://picsum.photos/id/302/400/550',
      price: 850.00,
      description: 'Unleash a deeper growl and optimize engine breathing.',
    },
    {
      id: 4,
      name: 'Forged Aluminum Wheels',
      image: 'https://picsum.photos/id/303/400/550',
      price: 2500.00,
      description: 'Ultra-lightweight and incredibly strong for a true performance edge.',
    },
    {
      id: 5,
      name: 'Alcantara Interior Trim Kit',
      image: 'https://picsum.photos/id/304/400/550',
      price: 450.00,
      description: 'Elevate your cabin with luxurious, soft-touch suede-like material.',
    },
    {
      id: 6,
      name: 'Brembo Brake Calipers',
      image: 'https://picsum.photos/id/305/400/550',
      price: 1500.00,
      description: 'Exceptional stopping power and fade resistance for demanding drives.',
    },
    {
      id: 7,
      name: 'Digital Display Cluster',
      image: 'https://picsum.photos/id/306/400/550',
      price: 750.00,
      description: 'Modernize your dashboard with customizable, high-resolution graphics.',
    },
    {
      id: 8,
      name: 'Adjustable Coilover Suspension',
      image: 'https://picsum.photos/id/307/400/550',
      price: 980.00,
      description: 'Fine-tune your ride height and damping for optimal handling dynamics.',
    },
    {
      id: 9,
      name: 'Aerodynamic Body Kit',
      image: 'https://picsum.photos/id/308/400/550',
      price: 1800.00,
      description: 'Enhance your car\'s visual appeal and reduce drag at high speeds.',
    },
    {
      id: 10,
      name: 'Custom Leather Racing Seats',
      image: 'https://picsum.photos/id/309/400/550',
      price: 1100.00,
      description: 'Experience unparalleled comfort and support on track or street.',
    },
  ];

  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <div key={product.id} className="premium-product-card">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-background-image" 
          />
          <div className="product-details-overlay">
            <h3 className="overlay-product-name">{product.name}</h3>
            <p className="overlay-product-description">{product.description}</p>
            <p className="overlay-product-price">${product.price.toFixed(2)}</p>
            <button className="overlay-button">View Product</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumProductCard;