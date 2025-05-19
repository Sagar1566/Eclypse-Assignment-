// EclypseContactCard.js
import React from "react";
import './Styles/Footer.css';

export default function Footer() {
  return (
    <div className="eclypse-card">
      <div className="eclypse-left">
        <h1 className="eclypse-title">
          Eclypse
          <sup className="eclypse-arrow">↗</sup>
        </h1>
        <nav className="eclypse-nav">
          <div className="eclypse-nav-row">
            <a href="/" className="eclypse-link">Home</a>
            <span className="eclypse-separator">/</span>
            <a href="/" className="eclypse-link">About</a>
            <span className="eclypse-separator">/</span>
            <a href="/" className="eclypse-link">Buy</a>
          </div>
          <div className="eclypse-nav-row">
            <a href="/" className="eclypse-link">Our Customers</a>
            <span className="eclypse-separator">/</span>
            <a href="/" className="eclypse-link">Contacts</a>
          </div>
        </nav>
      </div>
      <div className="eclypse-right">
        <div className="eclypse-section">
          <h2 className="eclypse-label">Contact</h2>
          <p className="eclypse-info">+91 123-456-7890</p>
        </div>
        <div className="eclypse-section">
          <h2 className="eclypse-label">Email</h2>
          <p className="eclypse-info">eclypse@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
