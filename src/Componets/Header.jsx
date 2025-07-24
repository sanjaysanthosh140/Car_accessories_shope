import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <a href="#home">Home Page</a>
        <a href="#shop">Shop Now</a>
        <a href="#contact">Contact Us</a>
        <div className="dropdown">
          <span>More Links ▾</span>
          {/* Optional: Add dropdown items here */}
        </div>
      </nav>
      <div className="actions">
        <button className="join-btn">Join</button>
        <button className="explore-btn">Explore</button>
      </div>
    </header>
  )
}

export default Header
