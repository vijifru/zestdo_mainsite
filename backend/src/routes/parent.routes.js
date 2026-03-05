/**
 * Parent Routes
 */

const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parent.controller');
const { authenticate, optionalAuth } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validation.middleware');
const { updateParentValidation, contactValidation, waitlistValidation } = require('../validations/parent.validation');

/**
 * @route   GET /api/parents
 * @desc    Get all parents
 * @access  Private (Admin)
 */
router.get('/', parentController.getAllParents);

/**
 * @route   GET /api/parents/:id
 * @desc    Get parent by ID
 * @access  Private
 */
router.get('/:id', parentController.getParentById);

/**
 * @route   PUT /api/parents/:id
 * @desc    Update parent profile
 * @access  Private
 */
router.put('/:id', authenticate, updateParentValidation, validate, parentController.updateParent);

/**
 * @route   POST /api/parents/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/contact', contactValidation, validate, parentController.submitContact);

/**
 * @route   GET /api/parents/contact/submissions
 * @desc    Get all contact submissions
 * @access  Private (Admin)
 */
router.get('/contact/submissions', parentController.getContactSubmissions);

/**
 * @route   POST /api/parents/waitlist
 * @desc    Join waitlist
 * @access  Public
 */
router.post('/waitlist', waitlistValidation, validate, parentController.joinWaitlist);

/**
 * @route   GET /api/parents/waitlist/count
 * @desc    Get waitlist count
 * @access  Public
 */
router.get('/waitlist/count', parentController.getWaitlistCount);

module.exports = router;
