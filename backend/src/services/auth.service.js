/**
 * Auth Service
 */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env');
const { getCollection, addToCollection, findByField } = require('../config/db');
const { ROLES } = require('../config/constants');

/**
 * Register a new user
 */
const register = async ({ name, email, password, role = ROLES.PARENT, phone = null }) => {
  // Check if user exists
  const existingUser = findByField('users', 'email', email);
  if (existingUser) {
    throw new Error('Email already registered');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    role,
    phone,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  addToCollection('users', user);

  // Generate token
  const token = generateToken(user.id);

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};

/**
 * Login user
 */
const login = async ({ email, password }) => {
  // Find user
  const user = findByField('users', 'email', email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Check if active
  if (!user.isActive) {
    throw new Error('Account is deactivated');
  }

  // Generate token
  const token = generateToken(user.id);

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};

/**
 * Generate JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

/**
 * Verify token
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Get user by ID
 */
const getUserById = (userId) => {
  const user = findByField('users', 'id', userId);
  if (!user) return null;
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

module.exports = {
  register,
  login,
  generateToken,
  verifyToken,
  getUserById
};
