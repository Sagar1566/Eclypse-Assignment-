import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Import your components/pages
import HomePage from "./landing_page/Home/HomePage";
import VideoCart from "./landing_page/Home/VideoCart";
import Checkout from "./landing_page/Cart/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<VideoCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
