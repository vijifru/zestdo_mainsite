/**
 * Trainer Validation Rules
 */

const { body } = require('express-validator');

const trainerApplicationValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[+]?[\d\s-]{10,}$/)
    .withMessage('Invalid phone number'),
  
  body('expertise')
    .trim()
    .notEmpty()
    .withMessage('Expertise is required'),
  
  body('experience')
    .optional()
    .trim(),
  
  body('city')
    .optional()
    .trim()
    .default('Bengaluru'),
  
  body('message')
    .optional()
    .trim()
];

const updateTrainerValidation = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('phone')
    .optional()
    .trim(),
  
  body('expertise')
    .optional()
    .trim(),
  
  body('experience')
    .optional()
    .trim(),
  
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio must be less than 500 characters'),
  
  body('availability')
    .optional()
    .isArray()
    .withMessage('Availability must be an array')
];

module.exports = {
  trainerApplicationValidation,
  updateTrainerValidation
};
