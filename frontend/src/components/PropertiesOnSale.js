import React from 'react';
import { Link } from 'react-router-dom';
import './PropertiesOnSale.css'; 

function PropertiesOnSale() {
  const regions = {
    north:["Central Water Catchment", "Lim Chu Kang", "Mandai", "Sembawang", "Simpang", "Sungei Kadut", "Woodlands", "Yishun"],
    northEast: ["Ang Mo Kio", "Hougang", "North-Eastern Island", "Punggol", "Seletar", "Sengkang", "Serangoon"],
    central:["Bishan", "Bukit Merah", "Bukit Timah", "Downtown Core", "Geylang", "Kallang", "Marina East", "Marina South", "Marine Parade", "Museum", "Newton", "Novena", "Orchard", "Outram", "Queenstown", "River Valley", "Rocher", "Singapore River", "Southern Islands", "Straits View", "Tanglin", "Toa Payoh"],
    east:["Bedok", "Changi", "Changi Bay", "Pasir Ris", "Paya Lebar", "Tampines"],
    west:["Boon Lay", "Bukit Batok", "Bukit Panjang", "Choa Chu Kang","Clementi", "Jurong East", "Jurong West", "Pioneer", "Tengah", "Tuas", "Western Water Catchment", "Western Islands"],
  };

  return (
    <div className="properties-wrapper">
      <div className="section-background">
        <div className="section-background-content">
          <div className="section-background-lines"></div>
        </div>
      </div>
      <h1>Properties on Sale</h1>
      <div className="properties-container">
        <div className="region-box" style={{ gridArea: 'north' }}>
          <h2>North</h2>
          <ul>
            {regions.north.map(location => (
              <li key={location}>
                <Link to={`/region/${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="region-box" style={{ gridArea: 'north-east' }}>
          <h2>North-East</h2>
          <ul>
            {regions.northEast.map(location => (
              <li key={location}>
                <Link to={`/region/${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="region-box" style={{ gridArea: 'central' }}>
          <h2>Central</h2>
          <ul>
            {regions.central.map(location => (
              <li key={location}>
                <Link to={`/region/${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="region-box" style={{ gridArea: 'west' }}>
          <h2>West</h2>
          <ul>
            {regions.west.map(location => (
              <li key={location}>
                <Link to={`/region/${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="region-box" style={{ gridArea: 'east' }}>
          <h2>East</h2>
          <ul>
            {regions.east.map(location => (
              <li key={location}>
                <Link to={`/region/${location}`}>{location}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertiesOnSale;
