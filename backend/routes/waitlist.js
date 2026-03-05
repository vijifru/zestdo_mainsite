/**
 * Waitlist Routes
 */

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getCollection, addToCollection } = require('../services/database');

// Get waitlist count
router.get('/count', (req, res) => {
  const waitlist = getCollection('waitlistSignups');
  res.json({ count: waitlist.length });
});

// Join waitlist
router.post('/', (req, res) => {
  const { name, email, phone, userType, apartmentName, city } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const waitlist = getCollection('waitlistSignups');
  
  // Check if email already exists
  const existingSignup = waitlist.find(w => w.email === email);
  if (existingSignup) {
    return res.status(400).json({ error: 'This email is already on the waitlist' });
  }

  const newSignup = {
    id: uuidv4(),
    name: name || null,
    email,
    phone: phone || null,
    userType: userType || 'parent',
    apartmentName: apartmentName || null,
    city: city || 'Bengaluru',
    createdAt: new Date().toISOString()
  };

  addToCollection('waitlistSignups', newSignup);

  res.status(201).json({
    success: true,
    message: 'You have been added to the waitlist! We will notify you when we launch in your area.',
    signup: newSignup
  });
});

module.exports = router;
