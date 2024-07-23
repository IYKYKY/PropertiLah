import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './styles.css';
const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

function SellToUs({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    planningArea: '',
    propertyType: '',
    floorSize: '',
    bedroom: '',
    bathroom: '',
    name: '',
    email: '',
    phone: '',
    expectedPrice: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch(`${apiUrl}/sellers/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.status === 200) {
          onFormSubmit();
          navigate('/contact-successful');
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        alert('Error submitting form');
        console.error('There was an error submitting the form!', error);
      });
    };
  
    return (
      <div>
        <h1 className="centered-title">Sell to Us</h1>
        <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px', margin: '0 auto' }}>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              name="propertyAddress"
              label="Property Address"
              value={formData.propertyAddress}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              select
              fullWidth
              label="Planning Area"
              name="planningArea"
              value={formData.planningArea}
              onChange={handleChange}
              required
              margin="normal"
            >
            <MenuItem value="Ang Mo Kio">Ang Mo Kio</MenuItem>
            <MenuItem value="Bedok">Bedok</MenuItem>
            <MenuItem value="Bishan">Bishan</MenuItem>
            <MenuItem value="Boon Lay">Boon Lay</MenuItem>
            <MenuItem value="Bukit Batok">Bukit Batok</MenuItem>
            <MenuItem value="Bukit Merah">Bukit Merah</MenuItem>
            <MenuItem value="Bukit Panjang">Bukit Panjang</MenuItem>
            <MenuItem value="Bukit Timah">Bukit Timah</MenuItem>
            <MenuItem value="Central Water Catchment">Central Water Catchment</MenuItem>
            <MenuItem value="Changi">Changi</MenuItem>
            <MenuItem value="Changi Bay">Changi Bay</MenuItem>
            <MenuItem value="Choa Chu Kang">Choa Chu Kang</MenuItem>
            <MenuItem value="Clementi">Clementi</MenuItem>
            <MenuItem value="Downtown Core">Downtown Core</MenuItem>
            <MenuItem value="Geylang">Geylang</MenuItem>
            <MenuItem value="Hougang">Hougang</MenuItem>
            <MenuItem value="Jurong East">Jurong East</MenuItem>
            <MenuItem value="Jurong West">Jurong West</MenuItem>
            <MenuItem value="Kallang">Kallang</MenuItem>
            <MenuItem value="Lim Chu Kang">Lim Chu Kang</MenuItem>
            <MenuItem value="Mandai">Mandai</MenuItem>
            <MenuItem value="Marina East">Marina East</MenuItem>
            <MenuItem value="Marina South">Marina South</MenuItem>
            <MenuItem value="Marine Parade">Marine Parade</MenuItem>
            <MenuItem value="Museum">Museum</MenuItem>
            <MenuItem value="Newton">Newton</MenuItem>
            <MenuItem value="North Eastern Islands">North-Eastern Islands</MenuItem>
            <MenuItem value="Novena">Novena</MenuItem>
            <MenuItem value="Orchard">Orchard</MenuItem>
            <MenuItem value="Outram">Outram</MenuItem>
            <MenuItem value="Pasir Ris">Pasir Ris</MenuItem>
            <MenuItem value="Paya Lebar">Paya Lebar</MenuItem>
            <MenuItem value="Pioneer">Pioneer</MenuItem>
            <MenuItem value="Punggol">Punggol</MenuItem>
            <MenuItem value="Queenstown">Queenstown</MenuItem>
            <MenuItem value="River Valley">River Valley</MenuItem>  
            <MenuItem value="Rochor">Rochor</MenuItem>
            <MenuItem value="Seletar">Seletar</MenuItem>
            <MenuItem value="Sembawang">Sembawang</MenuItem>
            <MenuItem value="Sengkang">Sengkang</MenuItem>
            <MenuItem value="Serangoon">Serangoon</MenuItem>
            <MenuItem value="Simpang">Simpang</MenuItem>
            <MenuItem value="Singapore River">Singapore River</MenuItem>
            <MenuItem value="Southern Islands">Southern Islands</MenuItem>
            <MenuItem value="Straits View">Straits View</MenuItem>
            <MenuItem value="Sungei Kadut">Sungei Kadut</MenuItem>
            <MenuItem value="Tampines">Tampines</MenuItem>
            <MenuItem value="Tanglin">Tanglin</MenuItem>
            <MenuItem value="Tengah">Tengah</MenuItem>
            <MenuItem value="Toa Payoh">Toa Payoh</MenuItem>
            <MenuItem value="Tuas">Tuas</MenuItem>
            <MenuItem value="Western Islands">Western Islands</MenuItem>
            <MenuItem value="Western Water Catchment">Western Water Catchment</MenuItem>
            <MenuItem value="Woodlands">Woodlands</MenuItem>
            <MenuItem value="Yishun">Yishun</MenuItem>
          </TextField>
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              select
              fullWidth
              label="Property Type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              margin="normal"
            >
              <MenuItem value="HDB">HDB for Sale</MenuItem>
              <MenuItem value="Condo">Condo for Sale</MenuItem>
              <MenuItem value="Bungalow">Bungalow for Sale</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Floor Size(Sqft)"
              name="floorSize"
              value={formData.floorSize}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Number of Bedrooms"
              name="bedroom"
              value={formData.bedroom}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Number of Bathrooms"
              name="bathroom"
              value={formData.bathroom}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>

          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <TextField
              fullWidth
              type="text"
              name="expectedPrice"
              label="Expected Price"
              value={formData.expectedPrice}
              onChange={handleChange}
              required
              margin="normal"
            />
          </Box>

          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <button type="submit" style={{ display: 'block', margin: '20px auto', padding: '0.7em 1.5em' }}>Submit</button>
          </Box>
        </form>
        <h6 style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}><h3>Note:</h3><br></br>To help you sell the property faster, our platform allows one email address to submit one property information only.<br></br>You may go to properties on sale section to check the display of your property and you may further upload images about your property there.</h6>
    </div>
    );
  }

export default SellToUs;
