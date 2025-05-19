import React from 'react';
import './Styles/EclypseGrid.css';
import V2 from './Video/V2.mp4';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';  // Add a 5th image for the third row

const EclypseGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item video">
        <video src={V2} autoPlay loop muted playsInline />
        <div className="hover-text">Refined Movement</div>
      </div>
      <div className="grid-item img2">
        <img src={img2} alt="Fabric" />
        <div className="hover-text">Premium wool blend in signature vermilion</div>
      </div>
      <div className="grid-item img3">
        <img src={img3} alt="Tailoring" />
        <div className="hover-text">Discreet side pockets with clean finish</div>
      </div>
      <div className="grid-item img4">
        <img src={img4} alt="Scissors" />
        <div className="hover-text">Hand-cut and assembled in small batches</div>
      </div>
      <div className="grid-item img5">
        <img src={img5} alt="Additional" />
        <div className="hover-text">Eclypse<sup>®</sup></div>
      </div>
    </div>
  );
};

export default EclypseGrid;
