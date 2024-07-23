import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from './MainLayout';
import { scroller } from 'react-scroll';
import axios from 'axios';
import Upload from './Upload';
import './RegionDetail.css';

const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

function RegionDetail() {
  const { name } = useParams();
  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${apiUrl}/sellers`);
        const filteredProperties = response.data.filter(property => property.planningArea.replace(/\s+/g, '-').toLowerCase() === name.replace(/\s+/g, '-').toLowerCase());
        setProperties(filteredProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [name]);

  const handleUpload = (uploadedImages) => {
    const updatedProperties = properties.map(property => {
      if (property._id === selectedPropertyId) {
        return { ...property, images: property.images.concat(uploadedImages) };
      }
      return property;
    });
    setProperties(updatedProperties);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <MainLayout scrollToSection={scrollToSection}>
      <div className="region-detail">
        <div className="region-background"></div>
        <h1 className="region-title">{name}</h1>
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div className="region-detail-box" key={index}>
              <h3>{property.propertyAddress}</h3>
              {property.images && property.images.length > 0 && (
                <div className="property-images">
                  {property.images.map((image, i) => (
                    <div key={i} style={{ display: 'inline-block', marginRight: '10px' }}>
                      <img 
                        src={`${apiUrl}/${image}`} 
                        alt={`Image ${i + 1}`} 
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                      />
                    </div>
                  ))}
                </div>
              )}
              <table className="property-details-table">
                <tbody>
                  <tr>
                    <td className="property-label">Property Type</td>
                    <td className="property-value">{property.propertyType}</td>
                  </tr>
                  <tr>
                    <td className="property-label">Floor Size(Sqft)</td>
                    <td className="property-value">{property.floorSize}</td>
                  </tr>
                  <tr>
                    <td className="property-label">Number of Bedrooms</td>
                    <td className="property-value">{property.bedroom}</td>
                  </tr>
                  <tr>
                    <td className="property-label">Number of Bathrooms</td>
                    <td className="property-value">{property.bathroom}</td>
                  </tr>
                  <tr>
                    <td className="property-label">Expected Price</td>
                    <td className="property-value">{property.expectedPrice}</td>
                  </tr>
                </tbody>
              </table>
              <Upload propertyId={property._id} onUpload={handleUpload} />
            </div>
          ))
        ) : (
          <p>No properties information available in this planning area.</p>
        )}
      </div>
    </MainLayout>
  );
}

export default RegionDetail;

