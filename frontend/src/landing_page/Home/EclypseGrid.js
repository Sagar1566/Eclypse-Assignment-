import React from 'react';
import './Styles/EclypseGrid.css';
import V2 from './Video/V2.mp4';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

const EclypseGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item video">
        <video src={V2} autoPlay loop muted playsInline />
        <div className="hover-text">Refined Movement</div>
      </div>
      <div className="grid-item">
        <img src={img2} alt="Fabric" />
        <div className="hover-text">Crafted Fabric</div>
      </div>
      <div className="grid-item">
        <img src={img3} alt="Tailoring" />
        <div className="hover-text">Tailored Design</div>
      </div>
      <div className="grid-item">
        <img src={img4} alt="Scissors" />
        <div className="hover-text">Precision Cuts</div>
      </div>
    </div>
  );
};

export default EclypseGrid;
