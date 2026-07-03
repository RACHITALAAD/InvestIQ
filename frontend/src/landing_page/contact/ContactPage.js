import React from 'react';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import OpenAccount from '../OpenAccount';

function ContactPage() {
    return (
        <>
          <ContactForm/>
          <FAQ/>
          <OpenAccount/>
        </>
    );
}

export default ContactPage;