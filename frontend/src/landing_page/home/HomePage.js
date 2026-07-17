import React from 'react';
import HeroSection from './HeroSection';
import OpenAccount from '../OpenAccount';
import InvestIQ from './InvestIQ';

function HomePage() {
    return (
        <>
            <HeroSection></HeroSection>
            <InvestIQ></InvestIQ>
            <OpenAccount></OpenAccount>
        </>
    );
}

export default HomePage;