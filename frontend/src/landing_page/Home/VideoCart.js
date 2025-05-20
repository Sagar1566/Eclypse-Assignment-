import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './Styles/VideoCart.css';
import productVideo from './Video/V3.mp4';

const VideoCart = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleBuy = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }

    // ✅ Navigate to checkout with optional product info
    navigate('/checkout', {
      state: {
        productName: "Silhouette No. 1 – Vermilion",
        price: 7999,
        size: selectedSize,
      }
    });
  };

  return (
    <div className="video-cart">
      <div className="video-section">
        <video className="product-video" autoPlay muted loop>
          <source src={productVideo} type="video/mp4" />
        </video>
      </div>

      <div className="product-details">
        <p className="description">
          A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem...
        </p>

        <div className="image-previews">
          <img src="/path/to/image1.jpg" alt="Preview 1" />
          <img src="/path/to/image2.jpg" alt="Preview 2" />
          <img src="/path/to/image3.jpg" alt="Preview 3" />
          <img src="/path/to/image4.jpg" alt="Preview 4" />
        </div>

        <div className="price">₹ 7,999 <span>MRP incl. of all taxes</span></div>

        <div className="size-selector">
          <p>Please select a size <a href="/size-chart">Size chart</a></p>
          <div className="sizes">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy" onClick={handleBuy}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
