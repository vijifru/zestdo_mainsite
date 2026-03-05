/**
 * Activities Routes
 */

const express = require('express');
const router = express.Router();
const { getCollection, findById } = require('../services/database');

// Get all activities
router.get('/', (req, res) => {
  const activities = getCollection('activities');
  res.json(activities);
});

// Get activity by ID
router.get('/:id', (req, res) => {
  const activity = findById('activities', parseInt(req.params.id));
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).json({ error: 'Activity not found' });
  }
});

module.exports = router;
