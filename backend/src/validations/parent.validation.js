/**
 * Parent Validation Rules
 */

const { body } = require('express-validator');

const updateParentValidation = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[+]?[\d\s-]{10,}$/)
    .withMessage('Invalid phone number'),
  
  body('apartmentName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Apartment name must be between 2 and 200 characters'),
  
  body('city')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('City must be between 2 and 100 characters'),
  
  body('children')
    .optional()
    .isArray()
    .withMessage('Children must be an array')
];

const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters')
];

const waitlistValidation = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  
  body('name')
    .optional()
    .trim(),
  
  body('phone')
    .optional()
    .trim(),
  
  body('userType')
    .optional()
    .isIn(['parent', 'trainer', 'apartment_admin'])
    .withMessage('Invalid user type')
];

module.exports = {
  updateParentValidation,
  contactValidation,
  waitlistValidation
};
