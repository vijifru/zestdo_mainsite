/**
 * Trainer Model
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Create a new trainer object
 */
const createTrainer = ({
  userId = null,
  name,
  email,
  phone = null,
  expertise,
  experience = null,
  city = 'Bengaluru',
  message = null,
  bio = null
}) => {
  return {
    id: uuidv4(),
    userId,
    name,
    email,
    phone,
    expertise,
    experience,
    city,
    message,
    bio,
    rating: 0,
    totalReviews: 0,
    status: 'pending', // pending, approved, rejected
    verified: false,
    availability: [],
    classes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

/**
 * Create trainer application
 */
const createTrainerApplication = ({
  name,
  email,
  phone = null,
  expertise,
  experience = null,
  city = 'Bengaluru',
  message = null
}) => {
  return {
    id: uuidv4(),
    name,
    email,
    phone,
    expertise,
    experience,
    city,
    message,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
};

/**
 * Trainer schema structure (for reference)
 */
const trainerSchema = {
  id: 'string (UUID)',
  userId: 'string (reference to user, optional)',
  name: 'string',
  email: 'string',
  phone: 'string (optional)',
  expertise: 'string',
  experience: 'string (optional)',
  city: 'string',
  bio: 'string (optional)',
  rating: 'number (0-5)',
  totalReviews: 'number',
  status: 'string (pending/approved/rejected)',
  verified: 'boolean',
  availability: ['object { day, timeSlots }'],
  classes: ['string (class IDs)'],
  createdAt: 'ISO date string',
  updatedAt: 'ISO date string'
};

module.exports = {
  createTrainer,
  createTrainerApplication,
  trainerSchema
};
