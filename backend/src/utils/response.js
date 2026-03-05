/**
 * Standardized API Response Helper
 */

const { HTTP_STATUS } = require('../config/constants');

/**
 * Success Response
 */
const success = (res, data = null, message = 'Success', statusCode = HTTP_STATUS.OK) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

/**
 * Created Response
 */
const created = (res, data = null, message = 'Created successfully') => {
  return success(res, data, message, HTTP_STATUS.CREATED);
};

/**
 * Error Response
 */
const error = (res, message = 'Error', statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, errors = null) => {
  const response = {
    success: false,
    message
  };
  if (errors) {
    response.errors = errors;
  }
  return res.status(statusCode).json(response);
};

/**
 * Not Found Response
 */
const notFound = (res, message = 'Resource not found') => {
  return error(res, message, HTTP_STATUS.NOT_FOUND);
};

/**
 * Bad Request Response
 */
const badRequest = (res, message = 'Bad request', errors = null) => {
  return error(res, message, HTTP_STATUS.BAD_REQUEST, errors);
};

/**
 * Unauthorized Response
 */
const unauthorized = (res, message = 'Unauthorized') => {
  return error(res, message, HTTP_STATUS.UNAUTHORIZED);
};

/**
 * Forbidden Response
 */
const forbidden = (res, message = 'Forbidden') => {
  return error(res, message, HTTP_STATUS.FORBIDDEN);
};

/**
 * Validation Error Response
 */
const validationError = (res, errors) => {
  return badRequest(res, 'Validation error', errors);
};

module.exports = {
  success,
  created,
  error,
  notFound,
  badRequest,
  unauthorized,
  forbidden,
  validationError
};
