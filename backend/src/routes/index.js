/**
 * Routes Index
 * Central route registration
 */

const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth.routes');
const parentRoutes = require('./parent.routes');
const trainerRoutes = require('./trainer.routes');
const apartmentRoutes = require('./apartment.routes');
const classRoutes = require('./class.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/parents', parentRoutes);
router.use('/trainers', trainerRoutes);
router.use('/apartments', apartmentRoutes);
router.use('/classes', classRoutes);

// Legacy routes for backward compatibility
router.get('/activities', (req, res, next) => {
  req.url = '/classes';
  classRoutes(req, res, next);
});

router.get('/activities/:id', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getClassById(req, res);
});

router.get('/testimonials', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getTestimonials(req, res);
});

router.get('/testimonials/role/:role', (req, res) => {
  req.query.role = req.params.role;
  const classController = require('../controllers/class.controller');
  classController.getTestimonials(req, res);
});

router.get('/subscription-plans', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getSubscriptionPlans(req, res);
});

router.get('/subscription-plans/popular', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getPopularPlan(req, res);
});

router.get('/user-roles', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getUserRoles(req, res);
});

router.get('/why-zestdo', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getWhyZestDo(req, res);
});

router.get('/communities', (req, res) => {
  const apartmentController = require('../controllers/apartment.controller');
  apartmentController.getCommunities(req, res);
});

router.get('/stats', (req, res) => {
  const classController = require('../controllers/class.controller');
  classController.getStats(req, res);
});

// Contact routes (legacy)
router.post('/contact', (req, res, next) => {
  const parentController = require('../controllers/parent.controller');
  parentController.submitContact(req, res, next);
});

router.get('/contact', (req, res, next) => {
  const parentController = require('../controllers/parent.controller');
  parentController.getContactSubmissions(req, res, next);
});

// Waitlist routes (legacy)
router.post('/waitlist', (req, res, next) => {
  const parentController = require('../controllers/parent.controller');
  parentController.joinWaitlist(req, res, next);
});

router.get('/waitlist/count', (req, res, next) => {
  const parentController = require('../controllers/parent.controller');
  parentController.getWaitlistCount(req, res, next);
});

// Trainer applications (legacy)
router.post('/trainer-applications', (req, res, next) => {
  const trainerController = require('../controllers/trainer.controller');
  trainerController.submitApplication(req, res, next);
});

// Apartment inquiries (legacy)
router.post('/apartment-inquiries', (req, res, next) => {
  const apartmentController = require('../controllers/apartment.controller');
  apartmentController.submitInquiry(req, res, next);
});

module.exports = router;
