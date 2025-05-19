// Accordion.jsx
import React, { useState } from 'react';
import './Styles/Accordion.css';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title="Size & Fit">
        <p>Details about sizing and fitting information.</p>
      </AccordionItem>
      <AccordionItem title="Delivery & Returns">
        <p>Information about delivery timelines and return policies.</p>
      </AccordionItem>
      <AccordionItem title="How This Was Made">
        <p>Details about the making and materials used in this product.</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;