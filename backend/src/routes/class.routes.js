/**
 * Class/Activity Routes
 */

const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');

/**
 * @route   GET /api/classes
 * @desc    Get all classes/activities
 * @access  Public
 */
router.get('/', classController.getAllClasses);

/**
 * @route   GET /api/classes/plans
 * @desc    Get subscription plans
 * @access  Public
 */
router.get('/plans', classController.getSubscriptionPlans);

/**
 * @route   GET /api/classes/plans/popular
 * @desc    Get popular plan
 * @access  Public
 */
router.get('/plans/popular', classController.getPopularPlan);

/**
 * @route   GET /api/classes/testimonials
 * @desc    Get testimonials
 * @access  Public
 */
router.get('/testimonials', classController.getTestimonials);

/**
 * @route   GET /api/classes/user-roles
 * @desc    Get user roles info
 * @access  Public
 */
router.get('/user-roles', classController.getUserRoles);

/**
 * @route   GET /api/classes/why-zestdo
 * @desc    Get why ZestDo points
 * @access  Public
 */
router.get('/why-zestdo', classController.getWhyZestDo);

/**
 * @route   GET /api/classes/stats
 * @desc    Get platform stats
 * @access  Public
 */
router.get('/stats', classController.getStats);

/**
 * @route   GET /api/classes/:id
 * @desc    Get class by ID
 * @access  Public
 */
router.get('/:id', classController.getClassById);

module.exports = router;
