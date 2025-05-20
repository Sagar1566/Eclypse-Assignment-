import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="checkout-container">
      <div className="address-section">
        <h2>Shipping Address</h2>
        <div className="form-section">
          <div className="radio-header">
            <input type="radio" checked readOnly />
            <label>Add New Address</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Street Address"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="Apt Number"
              name="apt"
              value={address.apt}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              value={address.state}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              value={address.zip}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save This Address</button>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <p className="policy-text">
          By placing your order, you agree to our company{" "}
          <a href="#">Privacy policy</a> and <a href="#">Conditions of use</a>.
        </p>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="summary-row">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="summary-row">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="summary-row">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>
          <hr />
          <div className="summary-total">
            <strong>Order Total:</strong>
            <strong>8,199</strong>
          </div>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}
