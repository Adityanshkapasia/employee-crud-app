const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ContactMethodSchema = new mongoose.Schema({
  contact_method: {
    type: String,
    enum: ['EMAIL', 'PHONE'],
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emp_id: {
    type: String,
    required: true,
    default: uuidv4
  },
  address: {
    line1: String,
    city: String,
    country: String,
    zip_code: String
  },
  contact_methods: [ContactMethodSchema]
});

module.exports = mongoose.model('Employee', EmployeeSchema);
