/**
 * Application Constants
 */

module.exports = {
  // User Roles
  ROLES: {
    PARENT: 'parent',
    TRAINER: 'trainer',
    APARTMENT_ADMIN: 'apartment_admin',
    ADMIN: 'admin'
  },

  // Application Status
  STATUS: {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
    ACTIVE: 'active',
    INACTIVE: 'inactive'
  },

  // HTTP Status Codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
  },

  // Validation Messages
  MESSAGES: {
    // Auth
    REGISTRATION_SUCCESS: 'Registration successful',
    LOGIN_SUCCESS: 'Login successful',
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_EXISTS: 'Email already registered',
    USER_NOT_FOUND: 'User not found',
    
    // General
    SUCCESS: 'Success',
    CREATED: 'Created successfully',
    UPDATED: 'Updated successfully',
    DELETED: 'Deleted successfully',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Access forbidden',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Internal server error',
    
    // Contact
    CONTACT_SUCCESS: 'Thank you for contacting us! We will get back to you within 24 hours.',
    
    // Waitlist
    WAITLIST_SUCCESS: 'You have been added to the waitlist! We will notify you when we launch in your area.',
    WAITLIST_EXISTS: 'This email is already on the waitlist',
    
    // Trainer
    TRAINER_APPLICATION_SUCCESS: 'Thank you for your application! Our team will review it and get back to you within 48 hours.',
    
    // Apartment
    APARTMENT_INQUIRY_SUCCESS: 'Thank you for your interest in partnering with ZestDo! Our team will contact you within 24 hours.'
  },

  // Activity Categories
  ACTIVITY_CATEGORIES: [
    'Music',
    'Dance',
    'Robotics',
    'Chess',
    'Art & Craft',
    'Yoga',
    'Public Speaking',
    'Sports Fitness'
  ]
};
