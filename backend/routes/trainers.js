/**
 * Trainer Application Routes
 */

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { addToCollection } = require('../services/database');

// Submit trainer application
router.post('/', (req, res) => {
  const { name, email, phone, expertise, experience, city, message } = req.body;

  // Validation
  if (!name || !email || !expertise) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['name', 'email', 'expertise']
    });
  }

  const newApplication = {
    id: uuidv4(),
    name,
    email,
    phone: phone || null,
    expertise,
    experience: experience || null,
    city: city || 'Bengaluru',
    message: message || null,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  addToCollection('trainerApplications', newApplication);

  res.status(201).json({
    success: true,
    message: 'Thank you for your application! Our team will review it and get back to you within 48 hours.',
    application: newApplication
  });
});

module.exports = router;
