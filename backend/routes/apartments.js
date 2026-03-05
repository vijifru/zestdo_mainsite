/**
 * Apartment Inquiry Routes
 */

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { addToCollection } = require('../services/database');

// Submit apartment partnership inquiry
router.post('/', (req, res) => {
  const { contactName, email, phone, apartmentName, city, unitsCount, message } = req.body;

  // Validation
  if (!contactName || !email || !apartmentName) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['contactName', 'email', 'apartmentName']
    });
  }

  const newInquiry = {
    id: uuidv4(),
    contactName,
    email,
    phone: phone || null,
    apartmentName,
    city: city || 'Bengaluru',
    unitsCount: unitsCount || null,
    message: message || null,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  addToCollection('apartmentInquiries', newInquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you for your interest in partnering with ZestDo! Our team will contact you within 24 hours.',
    inquiry: newInquiry
  });
});

module.exports = router;
