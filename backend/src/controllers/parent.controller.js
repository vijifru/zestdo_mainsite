/**
 * Parent Controller
 */

const parentService = require('../services/parent.service');
const { success, created, notFound, badRequest } = require('../utils/response');
const { MESSAGES } = require('../config/constants');
const logger = require('../utils/logger');

/**
 * Get all parents
 * GET /api/parents
 */
const getAllParents = async (req, res, next) => {
  try {
    const parents = parentService.getAllParents();
    return success(res, parents);
  } catch (error) {
    next(error);
  }
};

/**
 * Get parent by ID
 * GET /api/parents/:id
 */
const getParentById = async (req, res, next) => {
  try {
    const parent = parentService.getParentById(req.params.id);
    
    if (!parent) {
      return notFound(res, 'Parent not found');
    }
    
    return success(res, parent);
  } catch (error) {
    next(error);
  }
};

/**
 * Update parent profile
 * PUT /api/parents/:id
 */
const updateParent = async (req, res, next) => {
  try {
    const updated = parentService.updateParent(req.params.id, req.body);
    
    if (!updated) {
      return notFound(res, 'Parent not found');
    }
    
    return success(res, updated, MESSAGES.UPDATED);
  } catch (error) {
    next(error);
  }
};

/**
 * Submit contact form
 * POST /api/parents/contact
 */
const submitContact = async (req, res, next) => {
  try {
    const submission = parentService.submitContactForm(req.body);
    
    logger.info(`Contact form submitted: ${req.body.email}`);
    
    return created(res, submission, MESSAGES.CONTACT_SUCCESS);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all contact submissions
 * GET /api/parents/contact
 */
const getContactSubmissions = async (req, res, next) => {
  try {
    const submissions = parentService.getContactSubmissions();
    return success(res, submissions);
  } catch (error) {
    next(error);
  }
};

/**
 * Join waitlist
 * POST /api/parents/waitlist
 */
const joinWaitlist = async (req, res, next) => {
  try {
    const signup = parentService.joinWaitlist(req.body);
    
    logger.info(`Waitlist signup: ${req.body.email}`);
    
    return created(res, signup, MESSAGES.WAITLIST_SUCCESS);
  } catch (error) {
    if (error.message === 'Email already on waitlist') {
      return badRequest(res, MESSAGES.WAITLIST_EXISTS);
    }
    next(error);
  }
};

/**
 * Get waitlist count
 * GET /api/parents/waitlist/count
 */
const getWaitlistCount = async (req, res, next) => {
  try {
    const count = parentService.getWaitlistCount();
    return success(res, { count });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllParents,
  getParentById,
  updateParent,
  submitContact,
  getContactSubmissions,
  joinWaitlist,
  getWaitlistCount
};
