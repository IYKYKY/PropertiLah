import React, { useState } from 'react';
import axios from 'axios';

const Upload = ({ propertyId, onUpload }) => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // Limit to 3 files
    setImages(files);
    const urls = files.map(file => URL.createObjectURL(file));
    setImageUrls(urls);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = async () => {
    try {
      const response = await axios.post(`http://localhost:5002/property/validate-email/${propertyId}`, { email });
      if (response.status === 200 && response.data.message === 'Email validated successfully') {
        setIsEmailValid(true);
        setErrorMessage('');
      } else {
        setIsEmailValid(false);
        setErrorMessage('Only sellers can upload images.');
      }
    } catch (error) {
      console.error('Email validation failed', error);
      setIsEmailValid(false);
      setErrorMessage('Only sellers can upload images.');
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('email', email);
    images.forEach(image => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`http://localhost:5002/property/validate-email-and-upload/${propertyId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        onUpload(response.data.images);
        setImages([]);
        setImageUrls([]);
        setShowPopup(false);
      } else {
        console.error('Failed to upload images');
      }
    } catch (error) {
      console.error('There was an error uploading the images!', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Upload Images</button>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            {!isEmailValid ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
                <button type="button" onClick={validateEmail}>Validate Email</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              </>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                <p>Please upload 1-3 images about your property</p>
                <button type="button" onClick={handleSubmit}>Submit</button>
                <div className="image-preview">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`preview ${index}`}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
