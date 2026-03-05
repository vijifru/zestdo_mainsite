/**
 * Stats & General Data Routes
 */

const express = require('express');
const router = express.Router();
const { getCollection, getStats } = require('../services/database');

// Get user roles
router.get('/user-roles', (req, res) => {
  const userRoles = getCollection('userRoles');
  res.json(userRoles);
});

// Get why ZestDo points
router.get('/why-zestdo', (req, res) => {
  const whyZestDo = getCollection('whyZestDoPoints');
  res.json(whyZestDo);
});

// Get communities
router.get('/communities', (req, res) => {
  const communities = getCollection('communities');
  res.json(communities);
});

// Get platform stats
router.get('/stats', (req, res) => {
  const stats = getStats();
  res.json(stats);
});

module.exports = router;
