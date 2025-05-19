import React from 'react';
import './Styles/Testimonial.css';

const testimonials = [
  {
    text: "Understated, but unforgettable. It feels like it was made for me",
    name: "Random Woman",
    location: "NY, USA",
    image: "https://i.imgur.com/ExdKOOz.png", // replace with real URLs
  },
  {
    name: "Person Two",
    image: "https://i.imgur.com/QwZod6a.png",
  },
  {
    name: "Person Three",
    image: "https://i.imgur.com/0y0y0y0.png",
  },
];

const Testimonial = () => {
  const main = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <p className="testimonial-heading">OUR CUSTOMERS</p>
        <p className="testimonial-quote">
          <span className="quote-symbol">“</span>
          {main.text}
        </p>
        <p className="testimonial-name">{main.name}</p>
        <p className="testimonial-location">{main.location}</p>
      </div>

      <div className="testimonial-avatars">
        <div className="main-avatar">
          <img src={main.image} alt={main.name} />
          <button className="arrow-button">❮</button>
        </div>
        <div className="other-avatars">
          {others.map((person, i) => (
            <img key={i} src={person.image} alt={person.name} className="avatar" />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
