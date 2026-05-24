import React from 'react';
import heroImage from '../../assets/HomeSection.jpg';

function HeroSection() {
    return (
        <div className='container p-5'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <h1 className='fw-bold mb-4'>
                        Invest Smarter and Grow Faster.
                    </h1>

                    <p className='text-muted mb-4'>
                        A modern investment platform for portfolio tracking,
                        market analysis, and intelligent trading insights.
                    </p>

                    <button className='btn btn-primary btn-lg'>
                        Get Started
                    </button>
                </div>

                <div className='col-md-6 text-center'>
                    <img src={heroImage} alt="Hero Image" className='img' style={{width: "90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;