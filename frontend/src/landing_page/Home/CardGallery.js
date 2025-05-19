import React from "react";
import "./Styles/CardGallery.css";

export default function CardGallery() {
  return (
    <div className="card-gallery">
      <div className="card-item card-item-large">
        <img src="/images/look1.jpg" alt="Street fashion" />
      </div>
      <div className="card-item">
        <img src="/images/look2.jpg" alt="Red fabric" />
      </div>
      <div className="card-item">
        <img src="/images/look3.jpg" alt="Jacket close-up" />
      </div>
      <div className="card-item">
        <img src="/images/look4.jpg" alt="Tailoring" />
      </div>
      <div className="card-item">
        <img src="/images/look5.jpg" alt="Logo" />
      </div>
    </div>
  );
}
