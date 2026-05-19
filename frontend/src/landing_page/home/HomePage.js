import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Stats from './Stats';
import Pricing from './Pricing';
import MarketOverview from './MarketOverview';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Features></Features>
            <Stats></Stats>
            <Pricing></Pricing>
            <MarketOverview></MarketOverview>
            <OpenAccount></OpenAccount>
            <Footer></Footer>
        </>
    );
}

export default HomePage;