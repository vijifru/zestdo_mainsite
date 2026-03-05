/**
 * Trainer Service
 */

const { 
  getCollection, 
  addToCollection, 
  findById,
  updateInCollection 
} = require('../config/db');
const { createTrainer, createTrainerApplication } = require('../models/trainer.model');

/**
 * Get all trainers
 */
const getAllTrainers = () => {
  return getCollection('trainers');
};

/**
 * Get approved trainers only
 */
const getApprovedTrainers = () => {
  const trainers = getCollection('trainers');
  return trainers.filter(t => t.status === 'approved');
};

/**
 * Get trainer by ID
 */
const getTrainerById = (id) => {
  return findById('trainers', id);
};

/**
 * Create trainer profile
 */
const createTrainerProfile = (data) => {
  const trainer = createTrainer(data);
  addToCollection('trainers', trainer);
  return trainer;
};

/**
 * Update trainer profile
 */
const updateTrainer = (id, updates) => {
  const success = updateInCollection('trainers', id, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
  if (success) {
    return findById('trainers', id);
  }
  return null;
};

/**
 * Submit trainer application
 */
const submitApplication = (data) => {
  const application = createTrainerApplication(data);
  addToCollection('trainerApplications', application);
  return application;
};

/**
 * Get all trainer applications
 */
const getApplications = () => {
  return getCollection('trainerApplications');
};

/**
 * Update application status
 */
const updateApplicationStatus = (id, status) => {
  return updateInCollection('trainerApplications', id, { status });
};

module.exports = {
  getAllTrainers,
  getApprovedTrainers,
  getTrainerById,
  createTrainerProfile,
  updateTrainer,
  submitApplication,
  getApplications,
  updateApplicationStatus
};
