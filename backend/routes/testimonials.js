/**
 * Testimonials Routes
 */

const express = require('express');
const router = express.Router();
const { getCollection } = require('../services/database');

// Get all testimonials
router.get('/', (req, res) => {
  const testimonials = getCollection('testimonials');
  res.json(testimonials);
});

// Get testimonials by role
router.get('/role/:role', (req, res) => {
  const testimonials = getCollection('testimonials');
  const filtered = testimonials.filter(
    t => t.role.toLowerCase() === req.params.role.toLowerCase()
  );
  res.json(filtered);
});

module.exports = router;
