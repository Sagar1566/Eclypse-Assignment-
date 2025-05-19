import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CardGallery from './EclypseGrid';
import Eclypsev1 from './Elypsev1';
import EclypseGrid from './EclypseGrid';
import VideoCart from './VideoCart';
import IntroText from './IntroText';
import Accordion from './Accordion';
import Testimonial from './Testimonial';

function HomePage() {
    return ( 
        <>  
        <NavigationBar/>
            <Eclypsev1/>
            <EclypseGrid/>
            <IntroText/>
            <VideoCart/>
            <Accordion/>
            <Testimonial/>
            <Home/>
            <Footer/>
        </>
     );
}

export default HomePage;