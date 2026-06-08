import React from 'react';
import Hero from './Hero';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import OpenAccount from '../OpenAccount';
import ContactInfo from './ContactInfo';

function ContactPage() {
    return (
        <>
          <Hero/>
          <ContactForm/>
          <FAQ/>
          <OpenAccount/>
          {/* <ContactInfo/> */}

        
        </>
    );
}

export default ContactPage;