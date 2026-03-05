/**
 * Role-Based Access Control Middleware
 */

const { ROLES } = require('../config/constants');
const { forbidden } = require('../utils/response');

/**
 * Check if user has required role(s)
 * @param {string|string[]} allowedRoles - Single role or array of roles
 */
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return forbidden(res, 'Access denied');
    }

    const hasRole = allowedRoles.includes(req.user.role);
    
    if (!hasRole) {
      return forbidden(res, 'You do not have permission to access this resource');
    }

    next();
  };
};

/**
 * Check if user is admin
 */
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== ROLES.ADMIN) {
    return forbidden(res, 'Admin access required');
  }
  next();
};

/**
 * Check if user is parent
 */
const isParent = (req, res, next) => {
  if (!req.user || req.user.role !== ROLES.PARENT) {
    return forbidden(res, 'Parent access required');
  }
  next();
};

/**
 * Check if user is trainer
 */
const isTrainer = (req, res, next) => {
  if (!req.user || req.user.role !== ROLES.TRAINER) {
    return forbidden(res, 'Trainer access required');
  }
  next();
};

/**
 * Check if user is apartment admin
 */
const isApartmentAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== ROLES.APARTMENT_ADMIN) {
    return forbidden(res, 'Apartment admin access required');
  }
  next();
};

module.exports = {
  authorize,
  isAdmin,
  isParent,
  isTrainer,
  isApartmentAdmin
};
