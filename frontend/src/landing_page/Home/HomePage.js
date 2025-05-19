import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CardGallery from './EclypseGrid';
import Eclypsev1 from './Elypsev1';
import EclypseGrid from './EclypseGrid';

function HomePage() {
    return ( 
        <>  
        <NavigationBar/>
            <Eclypsev1/>
            <EclypseGrid/>
            <Home/>
            <Footer/>
        </>
     );
}

export default HomePage;