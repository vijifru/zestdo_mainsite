/**
 * Contact Routes
 */

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getCollection, addToCollection } = require('../services/database');

// Get all contact submissions
router.get('/', (req, res) => {
  const submissions = getCollection('contactSubmissions');
  res.json(submissions);
});

// Submit contact form
router.post('/', (req, res) => {
  const { name, email, phone, userType, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['name', 'email', 'subject', 'message']
    });
  }

  const newSubmission = {
    id: uuidv4(),
    name,
    email,
    phone: phone || null,
    userType: userType || 'other',
    subject,
    message,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  addToCollection('contactSubmissions', newSubmission);

  res.status(201).json({
    success: true,
    message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    submission: newSubmission
  });
});

module.exports = router;
