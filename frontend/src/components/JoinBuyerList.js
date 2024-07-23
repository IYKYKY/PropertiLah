import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './styles.css';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5002';

function JoinBuyersList({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    areaOfInterest: '',
    name: '',
    email: '',
    phone: '',
    typeOfFinancing: '',
    timelineToClose: '',
    budget: '',
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
    fetch(`${apiUrl}/buyers/add`, {
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
      <h1 className="centered-title">Join Buyer's List</h1>
      <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px', margin: '0 auto' }}>
        <Box sx={{ width: '100%', marginBottom: 2 }}>
          <TextField
            select
            fullWidth
            label="Area of Interest"
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            required
            margin="normal"
          >
            <MenuItem value="North">North</MenuItem>
            <MenuItem value="North-East">North-East</MenuItem>
            <MenuItem value="Central">Central</MenuItem>
            <MenuItem value="East">East</MenuItem>
            <MenuItem value="West">West</MenuItem>
          </TextField>
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
            select
            fullWidth
            type="text"
            name="typeOfFinancing"
            label="Type of Financing"
            value={formData.typeOfFinancing}
            onChange={handleChange}
            required
            margin="normal"
          >
            <MenuItem value="Cash-buyer">Cash-buyer</MenuItem>
            <MenuItem value="HDB-loan">HDB-loan</MenuItem>
            <MenuItem value="Bank-loan">Bank-loan</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ width: '100%', marginBottom: 2 }}>
          <TextField
            fullWidth
            type="text"
            name="timelineToClose"
            label="Timeline to Close(in months, N.A. if not applicable)"
            value={formData.timelineToClose}
            onChange={handleChange}
            required
            margin="normal"
          />
        </Box>
        <Box sx={{ width: '100%', marginBottom: 2 }}>
          <TextField
            fullWidth
            type="text"
            name="budget"
            label="Budget(N.A. if not applicable)"
            value={formData.budget}
            onChange={handleChange}
            required
            margin="normal"
          />
        </Box>
        <Box sx={{ width: '100%', marginBottom: 2 }}>
          <button type="submit" style={{ display:'block', margin: '20px auto', padding: '0.7em 1.5em' }}>Submit</button>
        </Box>
      </form>
    </div>
  );
}

export default JoinBuyersList;
