import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import axios from 'axios';
import About from './components/About';
import SellToUs from './components/SellToUs';
import JoinBuyersList from './components/JoinBuyerList';
import PropertiesOnSale from './components/PropertiesOnSale';
import RegionDetail from './components/RegionDetail'; 
import ContactSuccessful from './components/ContactSuccessful';
import SubmitSuccessful from './components/SubmitSuccessful';
import MainLayout from './components/MainLayout';

const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

function App() {
  const [properties, setProperties] = useState([]);

  const refreshProperties = () => {
    axios.get(`${apiUrl}/sellers`)
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  };

  useEffect(() => {
    refreshProperties();
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout scrollToSection={scrollToSection}>
            <Element name="about">
              <About />
            </Element>
            <Element name="sell">
              <SellToUs onFormSubmit={refreshProperties} />
            </Element>
            <Element name="buyers">
              <JoinBuyersList onFormSubmit={refreshProperties} />
            </Element>
            <Element name="properties">
              <PropertiesOnSale properties={properties} />
            </Element>
          </MainLayout>
        } />
        <Route path="/region/:name" element={<RegionDetail />} />
        <Route path="/contact-successful" element={<ContactSuccessful />} />
        <Route path="/submit-successful" element={<SubmitSuccessful />} />
      </Routes>
    </Router>
  );
}

export default App;
