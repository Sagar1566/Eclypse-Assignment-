import React, { useRef } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Eclypsev1 from './Elypsev1';
import EclypseGrid from './EclypseGrid';
import VideoCart from './VideoCart';
import IntroText from './IntroText';
import Accordion from './Accordion';
import Testimonial from './Testimonial';
import Home from './Home';

function HomePage() {
  const videoCartRef = useRef(null);
  const logoHeadingRef = useRef(null); // ⬅️ Ref for Eclypse heading

  const scrollToVideoCart = () => {
    videoCartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLogoHeading = () => {
    logoHeadingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavigationBar scrollToVideoCart={scrollToVideoCart} scrollToLogoHeading={scrollToLogoHeading} />
      {/* The heading you want to scroll to */}
      <div ref={logoHeadingRef}>
        <h1 className="eclypse-logo">Eclypse<sup>®</sup></h1>
      </div>

      <Eclypsev1 />
      <EclypseGrid />
      <IntroText />
      <div ref={videoCartRef}>
        <VideoCart />
      </div>
      <Accordion />
      <Testimonial />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;