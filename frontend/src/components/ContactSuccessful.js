import React from 'react';
import MainLayout from './MainLayout';
import { scroller } from 'react-scroll';

const ContactSuccessful = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <MainLayout scrollToSection={scrollToSection}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Thank You</h1>
        <img src="https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2021/02/negoation-landing.jpg" alt="Thank You" style={{ width: '300px', marginTop: '20px' }} />
        <p>Thank you for contacting us, someone will be in touch shortly.</p>
      </div>
    </MainLayout>
  );
};

export default ContactSuccessful;

