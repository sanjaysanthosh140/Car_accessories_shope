// PremiumProductCard.jsx
import React from 'react';
import './Carts.css';
import product_1 from "../assets/prod/prod_1.jpg"
import product_2 from "../assets/prod/prod_2.jpg"
import product_3 from "../assets/prod/prod_3.jpg"
import product_4 from "../assets/prod/prod_4.jpg"
import product_5 from "../assets/prod/prod_5.jpg"
import product_6 from "../assets/prod/prod_6.jpg"
import product_7 from "../assets/prod/prod_7.jpg"
import product_8 from "../assets/prod/prod_8.jpg"
const PremiumProductCard = () => {
  const products = [
    {
      id: 1,
      name: 'Q18 15W Wireless Charging Bracket',
      image: product_1,
      price: 599.99,
      description: 'A car phone holder that automatically locks and offers 15W wireless charging via infrared induction and multi-angle rotation.',
    },
    {
      id: 2,
      name: 'RT-60L Air Outlet/Car Mobile Phone Holder',
      image: product_2,
      price: 1200.00,
      description: 'A simple, non-charging mobile phone holder designed to clip into a cars air vent, allowing 360-degree rotation',
    },
    {
      id: 3,
      name: 'Q18 Smart Car Wireless Charging Holder',
      image: product_3,
      price: 850.00,
      description: 'A disassembled view of a smart car phone holder with a wireless charging coil and air vent mount.',
    },
    {
      id: 4,
      name: 'C05 Wireless Induction Car Holder',
      image: product_4,
      price: 2500.00,
      description: 'A fast-charging wireless car phone holder featuring 360-degree rotation and smart automatic opening and closing.',
    },
    {
      id: 5,
      name: 'RT-60L Air Outlet/Car Mobile Phone Holder',
      image: product_5,
      price: 450.00,
      description: 'A simple, non-charging mobile phone holder designed to clip into a cars air vent, allowing 360-degree rotation.',
    },
    {
      id: 6,
      name: 'C05 Wireless Induction Car Holder',
      image: product_6,
      price: 1500.00,
      description: 'A fast-charging wireless car phone holder featuring 360-degree rotation and smart automatic opening and closing.',
    },
    {
      id: 7,
      name: 'Multi-Color Quilted Car Seat/Floor Mat Set',
      image: product_7,
      price: 750.00,
      description: 'A collection of car seat or floor mats in various colors, featuring a quilted, textured leather-like material.',
    },
    {
      id: 8,
      name: 'Black and Red Quilted Car Floor Mat',
      image: product_8,
      price: 980.00,
      description: 'A single, premium-looking floor mat in black with red piping and stitching, designed with a textured, anti-slip surface.',
    },
    //{
    //   id: 9,
    //   name: 'Aerodynamic Body Kit',
    //   image: 'https://picsum.photos/id/308/400/550',
    //   price: 1800.00,
    //   description: 'Enhance your car\'s visual appeal and reduce drag at high speeds.',
    // },
    // {
    //   id: 10,
    //   name: 'Custom Leather Racing Seats',
    //   image: 'https://picsum.photos/id/309/400/550',
    //   price: 1100.00,
    //   description: 'Experience unparalleled comfort and support on track or street.',
    // },
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
            {/* <p className="overlay-product-price">${product.price.toFixed(2)}</p> */}
            {/* <button className="overlay-button">View Product</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremiumProductCard;