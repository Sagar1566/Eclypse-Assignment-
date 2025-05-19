import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import CardGallery from './CardGallery';
import Eclypsev1 from './Elypsev1';

function HomePage() {
    return ( 
        <>  
        <NavigationBar/>
            <Eclypsev1/>
            <CardGallery/>
            <Home/>
            <Footer/>
        </>
     );
}

export default HomePage;