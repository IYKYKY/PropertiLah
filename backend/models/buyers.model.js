const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  areaOfInterest: {
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
    required: true
  },
  typeOfFinancing: {
    type: String,
    required: true
  },
  timelineToClose: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Buyer', buyerSchema);
