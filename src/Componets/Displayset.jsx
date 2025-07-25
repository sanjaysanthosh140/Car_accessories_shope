// CarSeatDisplay.jsx
import React, { useState } from 'react';
import './Displayset.css';

// Import your car seat images. You'll need different images for each color.
// For example, car-seat-black.png, car-seat-red.png, etc.

import carSeatBlack from '../assets/black.jpg';
import carSeatRed from '../assets/red.jpg';
import carSeatBeige from '../assets/begin.jpg';
import carSeatBlue from '../assets/blue.jpg';

const colors = [
    { name: 'Black', hex: '#1a1a1a', image: carSeatBlack },
    { name: 'Red', hex: '#c0392b', image: carSeatRed },
    { name: 'Beige', hex: '#d2b48c', image: carSeatBeige },
    { name: 'Blue', hex: '#2980b9', image: carSeatBlue },
];

const CarSeatDisplay = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleColorChange = (color) => {
        if (color.name === selectedColor.name) return; // Prevent re-animation if same color clicked

        setIsAnimating(true);
        setTimeout(() => {
            setSelectedColor(color);
            setIsAnimating(false);
        }, 300); // Duration matches CSS animation
    };

    return (
        <section className="car-seat-display-section">
            <div className="display-container">
                <h2 className="display-title">Customize Your Ride</h2>
                <p className="display-subtitle">Select your preferred seat color and elevate your interior.</p>

                <div className="seat-viewer-wrapper">
                    <div className={`car-seat-image-container ${isAnimating ? 'animating' : ''}`}>
                        <img
                            src={selectedColor.image}
                            alt={`${selectedColor.name} Car Seat`}
                            className="car-seat-image"
                        />
                    </div>
                </div>

                <div className="color-selectors">
                    {colors.map((color) => (
                        <div
                            key={color.name}
                            className={`color-swatch ${selectedColor.name === color.name ? 'active' : ''}`}
                            style={{ '--swatch-color': color.hex }}
                            onClick={() => handleColorChange(color)}
                            aria-label={`Select ${color.name} color`}
                            data-tooltip={color.name}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarSeatDisplay;