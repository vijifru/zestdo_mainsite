/**
 * Global Error Handling Middleware
 */

const logger = require('../utils/logger');
const { error } = require('../utils/response');
const { HTTP_STATUS } = require('../config/constants');

/**
 * Not Found Handler
 */
const notFoundHandler = (req, res, next) => {
  return error(res, `Route ${req.originalUrl} not found`, HTTP_STATUS.NOT_FOUND);
};

/**
 * Global Error Handler
 */
const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return error(res, err.message, HTTP_STATUS.BAD_REQUEST);
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return error(res, 'Invalid token', HTTP_STATUS.UNAUTHORIZED);
  }

  // Default error
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal server error';

  return error(res, message, statusCode);
};

module.exports = {
  notFoundHandler,
  errorHandler
};
