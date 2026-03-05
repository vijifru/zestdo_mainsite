/**
 * Subscription Plans Routes
 */

const express = require('express');
const router = express.Router();
const { getCollection } = require('../services/database');

// Get all subscription plans
router.get('/', (req, res) => {
  const plans = getCollection('subscriptionPlans');
  res.json(plans);
});

// Get popular plan
router.get('/popular', (req, res) => {
  const plans = getCollection('subscriptionPlans');
  const popularPlan = plans.find(p => p.popular);
  if (popularPlan) {
    res.json(popularPlan);
  } else {
    res.status(404).json({ error: 'No popular plan found' });
  }
});

module.exports = router;
