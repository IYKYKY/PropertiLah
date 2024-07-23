const express = require('express');
const multer = require('multer');
const Seller = require('../models/sellers.model');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 
router.post('/validate-email-and-upload/:sellerId', upload.array('images', 3), async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { email } = req.body;
    const seller = await Seller.findById(sellerId);

    if (seller && seller.email === email) {
      const imageUrls = req.files.map(file => file.path); 
      seller.images = seller.images.concat(imageUrls);
      await seller.save();
      res.status(200).json({ message: 'Images uploaded successfully', images: imageUrls });
    } else {
      res.status(400).json({ message: 'Invalid email' });
    }
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/validate-email/:sellerId', async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { email } = req.body;
    const seller = await Seller.findById(sellerId);

    if (seller && seller.email === email) {
      res.status(200).json({ message: 'Email validated successfully' });
    } else {
      res.status(400).json({ message: 'Invalid email' });
    }
  } catch (error) {
    console.error('Error validating email:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
