const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  propertyAddress: {
    type: String,
    required: true,
    set: function(value) {
      return value.toUpperCase();
    }
  },
  planningArea: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },  
  floorSize: {
    type: String,
    required: true
  },
  bedroom: {
    type: String,
    required: true
  },
  bathroom: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    },
  phone: {
    type: String,
    required: false
  },
  expectedPrice: {
    type: String,
    required: true
  },
  images: {
    type: [String],
  },
});

module.exports = mongoose.model('Seller', sellerSchema);
