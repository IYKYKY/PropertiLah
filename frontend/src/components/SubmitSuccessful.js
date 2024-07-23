import React from 'react';
import MainLayout from './MainLayout';
import { scroller } from 'react-scroll';

const SubmitSuccessful = () => {
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
        <img src="https://www.bankrate.com/2022/11/22154629/How-to-find-the-best-real-estate-agent-when-youre-ready-to-buy.jpg?auto=webp&optimize=high&crop=16:9" alt="Thank You" style={{ width: '300px', marginTop: '20px' }} />
        <p>Thanks for providing the information! <br></br><br></br> Your property will be displayed on our website soon, you may further upload photos later. </p>
      </div>
    </MainLayout>
  );
};

export default SubmitSuccessful;
