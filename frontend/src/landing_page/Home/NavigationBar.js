import React, { useState } from 'react';
import './NavBar.css';
import logoImg from '../../landing_page/Home/images/Logo.png';


const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-top">
                <div className="navbar-main">
                    <div className="logo">
                        <img src={logoImg} alt="Logo" />
                    </div>

                    <div className={`right-section ${menuOpen ? 'open' : ''}`}>
                        <div className="nav-links">
                            <a href="#about">About Us</a>
                            <a href="#waitlist">Waitlist</a>
                            <a href="#cart">Cart</a>
                        </div>
                        <button className="buy-button">Buy</button>
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
