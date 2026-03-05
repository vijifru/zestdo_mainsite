/**
 * Trainer Controller
 */

const trainerService = require('../services/trainer.service');
const { success, created, notFound } = require('../utils/response');
const { MESSAGES } = require('../config/constants');
const logger = require('../utils/logger');

/**
 * Get all trainers
 * GET /api/trainers
 */
const getAllTrainers = async (req, res, next) => {
  try {
    const { approved } = req.query;
    
    const trainers = approved === 'true' 
      ? trainerService.getApprovedTrainers()
      : trainerService.getAllTrainers();
    
    return success(res, trainers);
  } catch (error) {
    next(error);
  }
};

/**
 * Get trainer by ID
 * GET /api/trainers/:id
 */
const getTrainerById = async (req, res, next) => {
  try {
    const trainer = trainerService.getTrainerById(req.params.id);
    
    if (!trainer) {
      return notFound(res, 'Trainer not found');
    }
    
    return success(res, trainer);
  } catch (error) {
    next(error);
  }
};

/**
 * Update trainer profile
 * PUT /api/trainers/:id
 */
const updateTrainer = async (req, res, next) => {
  try {
    const updated = trainerService.updateTrainer(req.params.id, req.body);
    
    if (!updated) {
      return notFound(res, 'Trainer not found');
    }
    
    return success(res, updated, MESSAGES.UPDATED);
  } catch (error) {
    next(error);
  }
};

/**
 * Submit trainer application
 * POST /api/trainers/apply
 */
const submitApplication = async (req, res, next) => {
  try {
    const application = trainerService.submitApplication(req.body);
    
    logger.info(`Trainer application submitted: ${req.body.email}`);
    
    return created(res, application, MESSAGES.TRAINER_APPLICATION_SUCCESS);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all trainer applications
 * GET /api/trainers/applications
 */
const getApplications = async (req, res, next) => {
  try {
    const applications = trainerService.getApplications();
    return success(res, applications);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTrainers,
  getTrainerById,
  updateTrainer,
  submitApplication,
  getApplications
};
