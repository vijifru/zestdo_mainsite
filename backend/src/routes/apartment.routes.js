/**
 * Apartment Routes
 */

const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartment.controller');
const { authenticate } = require('../middlewares/auth.middleware');

/**
 * @route   GET /api/apartments
 * @desc    Get all apartments
 * @access  Public
 */
router.get('/', apartmentController.getAllApartments);

/**
 * @route   GET /api/apartments/communities
 * @desc    Get partner communities
 * @access  Public
 */
router.get('/communities', apartmentController.getCommunities);

/**
 * @route   POST /api/apartments/inquire
 * @desc    Submit partnership inquiry
 * @access  Public
 */
router.post('/inquire', apartmentController.submitInquiry);

/**
 * @route   GET /api/apartments/inquiries
 * @desc    Get all inquiries
 * @access  Private (Admin)
 */
router.get('/inquiries', apartmentController.getInquiries);

/**
 * @route   GET /api/apartments/:id
 * @desc    Get apartment by ID
 * @access  Public
 */
router.get('/:id', apartmentController.getApartmentById);

/**
 * @route   PUT /api/apartments/:id
 * @desc    Update apartment
 * @access  Private
 */
router.put('/:id', authenticate, apartmentController.updateApartment);

module.exports = router;
