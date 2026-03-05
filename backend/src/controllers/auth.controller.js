/**
 * Auth Controller
 */

const authService = require('../services/auth.service');
const { success, created, badRequest } = require('../utils/response');
const { MESSAGES } = require('../config/constants');
const logger = require('../utils/logger');

/**
 * Register new user
 * POST /api/auth/register
 */
const register = async (req, res, next) => {
  try {
    const { name, email, password, role, phone } = req.body;
    
    const result = await authService.register({ name, email, password, role, phone });
    
    logger.info(`New user registered: ${email}`);
    
    return created(res, result, MESSAGES.REGISTRATION_SUCCESS);
  } catch (error) {
    if (error.message === 'Email already registered') {
      return badRequest(res, MESSAGES.EMAIL_EXISTS);
    }
    next(error);
  }
};

/**
 * Login user
 * POST /api/auth/login
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const result = await authService.login({ email, password });
    
    logger.info(`User logged in: ${email}`);
    
    return success(res, result, MESSAGES.LOGIN_SUCCESS);
  } catch (error) {
    if (error.message === 'Invalid credentials' || error.message === 'Account is deactivated') {
      return badRequest(res, MESSAGES.INVALID_CREDENTIALS);
    }
    next(error);
  }
};

/**
 * Get current user profile
 * GET /api/auth/me
 */
const getMe = async (req, res, next) => {
  try {
    const user = authService.getUserById(req.user.id);
    
    if (!user) {
      return badRequest(res, MESSAGES.USER_NOT_FOUND);
    }
    
    return success(res, user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe
};
