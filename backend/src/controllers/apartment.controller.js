/**
 * Apartment Controller
 */

const apartmentService = require('../services/apartment.service');
const { success, created, notFound } = require('../utils/response');
const { MESSAGES } = require('../config/constants');
const logger = require('../utils/logger');

/**
 * Get all apartments
 * GET /api/apartments
 */
const getAllApartments = async (req, res, next) => {
  try {
    const { active } = req.query;
    
    const apartments = active === 'true'
      ? apartmentService.getActiveApartments()
      : apartmentService.getAllApartments();
    
    return success(res, apartments);
  } catch (error) {
    next(error);
  }
};

/**
 * Get communities (partner apartments)
 * GET /api/apartments/communities
 */
const getCommunities = async (req, res, next) => {
  try {
    const communities = apartmentService.getCommunities();
    return success(res, communities);
  } catch (error) {
    next(error);
  }
};

/**
 * Get apartment by ID
 * GET /api/apartments/:id
 */
const getApartmentById = async (req, res, next) => {
  try {
    const apartment = apartmentService.getApartmentById(req.params.id);
    
    if (!apartment) {
      return notFound(res, 'Apartment not found');
    }
    
    return success(res, apartment);
  } catch (error) {
    next(error);
  }
};

/**
 * Update apartment
 * PUT /api/apartments/:id
 */
const updateApartment = async (req, res, next) => {
  try {
    const updated = apartmentService.updateApartment(req.params.id, req.body);
    
    if (!updated) {
      return notFound(res, 'Apartment not found');
    }
    
    return success(res, updated, MESSAGES.UPDATED);
  } catch (error) {
    next(error);
  }
};

/**
 * Submit partnership inquiry
 * POST /api/apartments/inquire
 */
const submitInquiry = async (req, res, next) => {
  try {
    const inquiry = apartmentService.submitInquiry(req.body);
    
    logger.info(`Apartment inquiry submitted: ${req.body.email}`);
    
    return created(res, inquiry, MESSAGES.APARTMENT_INQUIRY_SUCCESS);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all inquiries
 * GET /api/apartments/inquiries
 */
const getInquiries = async (req, res, next) => {
  try {
    const inquiries = apartmentService.getInquiries();
    return success(res, inquiries);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllApartments,
  getCommunities,
  getApartmentById,
  updateApartment,
  submitInquiry,
  getInquiries
};
