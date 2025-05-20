import React, { useState } from 'react';
import './Styles/NavBar.css';
import logoImg from '../../landing_page/Home/images/Logo.png';

const NavigationBar = ({ scrollToVideoCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-main">
          {/* Logo scrolls to top on click */}
          <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <img src={logoImg} alt="Logo" />
          </div>

          <div className={`right-section ${menuOpen ? 'open' : ''}`}>
            <div className="nav-links">
              <a href="#about">About Us</a>
              <a href="#waitlist">Waitlist</a>
              <a href="#cart">Cart</a>
            </div>
            <button className="buy-button" onClick={scrollToVideoCart}>Buy</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
