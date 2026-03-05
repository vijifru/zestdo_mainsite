/**
 * Trainer Routes
 */

const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validation.middleware');
const { trainerApplicationValidation, updateTrainerValidation } = require('../validations/trainer.validation');

/**
 * @route   GET /api/trainers
 * @desc    Get all trainers
 * @access  Public
 */
router.get('/', trainerController.getAllTrainers);

/**
 * @route   POST /api/trainers/apply
 * @desc    Submit trainer application
 * @access  Public
 */
router.post('/apply', trainerApplicationValidation, validate, trainerController.submitApplication);

/**
 * @route   GET /api/trainers/applications
 * @desc    Get all trainer applications
 * @access  Private (Admin)
 */
router.get('/applications', trainerController.getApplications);

/**
 * @route   GET /api/trainers/:id
 * @desc    Get trainer by ID
 * @access  Public
 */
router.get('/:id', trainerController.getTrainerById);

/**
 * @route   PUT /api/trainers/:id
 * @desc    Update trainer profile
 * @access  Private
 */
router.put('/:id', authenticate, updateTrainerValidation, validate, trainerController.updateTrainer);

module.exports = router;
