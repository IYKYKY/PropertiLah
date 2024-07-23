import React from 'react';
import Navigation from './Navigation';

const MainLayout = ({ children, scrollToSection }) => {
  return (
    <div>
      <Navigation scrollToSection={scrollToSection} />
      {children}
    </div>
  );
};

export default MainLayout;