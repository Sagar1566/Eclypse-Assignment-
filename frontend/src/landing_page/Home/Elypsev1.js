import React from 'react';
import './Styles/Elypsev1.css';
import V1Video from './Video/V1.mov';

const Eclypsev1 = () => {
    return (
        <div className="eclypse-container">
            <header className="eclypse-header">
                {/* <h1 className="eclypse-logo">Eclypse<sup>®</sup></h1> */}
            </header>
            <span className="eclypse-year">© 2025</span>

            <div className="eclypse-hero">
                <video
                    className="eclypse-video"
                    src={V1Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <p className="eclypse-tagline">A silhouette worth remembering</p>
            </div>

            {/* New section from image */}
            <section className="eclypse-description">
                <p>
                    Rooted in a philosophy of quiet luxury, our garments are designed to speak softly<br />
                    in cut, in movement, in presence.
                </p>
                <a href="#" className="eclypse-link">
                    Learn more about Eclypse <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
};

export default Eclypsev1;
