/**
 * Authentication Middleware
 */

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');
const { unauthorized } = require('../utils/response');
const { findById } = require('../config/db');

/**
 * Verify JWT Token
 */
const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return unauthorized(res, 'No token provided');
    }

    const token = authHeader.split(' ')[1];
    
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Find user in database
    const user = findById('users', decoded.userId);
    
    if (!user) {
      return unauthorized(res, 'User not found');
    }

    // Attach user to request
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    };

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return unauthorized(res, 'Invalid token');
    }
    if (error.name === 'TokenExpiredError') {
      return unauthorized(res, 'Token expired');
    }
    return unauthorized(res, 'Authentication failed');
  }
};

/**
 * Optional Authentication - doesn't fail if no token
 */
const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      req.user = null;
      return next();
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = findById('users', decoded.userId);

    req.user = user ? {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    } : null;

    next();
  } catch (error) {
    req.user = null;
    next();
  }
};

module.exports = {
  authenticate,
  optionalAuth
};
