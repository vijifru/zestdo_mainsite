/**
 * Parent Service
 */

const { v4: uuidv4 } = require('uuid');
const { 
  getCollection, 
  addToCollection, 
  findById, 
  findByField,
  updateInCollection 
} = require('../config/db');
const { createParent } = require('../models/parent.model');

/**
 * Get all parents
 */
const getAllParents = () => {
  return getCollection('parents');
};

/**
 * Get parent by ID
 */
const getParentById = (id) => {
  return findById('parents', id);
};

/**
 * Get parent by user ID
 */
const getParentByUserId = (userId) => {
  return findByField('parents', 'userId', userId);
};

/**
 * Create parent profile
 */
const createParentProfile = (data) => {
  const parent = createParent(data);
  addToCollection('parents', parent);
  return parent;
};

/**
 * Update parent profile
 */
const updateParent = (id, updates) => {
  const success = updateInCollection('parents', id, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
  if (success) {
    return findById('parents', id);
  }
  return null;
};

/**
 * Submit contact form
 */
const submitContactForm = ({ name, email, phone, userType, subject, message }) => {
  const submission = {
    id: uuidv4(),
    name,
    email,
    phone: phone || null,
    userType: userType || 'parent',
    subject,
    message,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  addToCollection('contactSubmissions', submission);
  return submission;
};

/**
 * Get all contact submissions
 */
const getContactSubmissions = () => {
  return getCollection('contactSubmissions');
};

/**
 * Join waitlist
 */
const joinWaitlist = ({ name, email, phone, userType, apartmentName, city }) => {
  // Check if email already exists
  const waitlist = getCollection('waitlistSignups');
  const existing = waitlist.find(w => w.email === email);
  if (existing) {
    throw new Error('Email already on waitlist');
  }

  const signup = {
    id: uuidv4(),
    name: name || null,
    email,
    phone: phone || null,
    userType: userType || 'parent',
    apartmentName: apartmentName || null,
    city: city || 'Bengaluru',
    createdAt: new Date().toISOString()
  };
  addToCollection('waitlistSignups', signup);
  return signup;
};

/**
 * Get waitlist count
 */
const getWaitlistCount = () => {
  return getCollection('waitlistSignups').length;
};

module.exports = {
  getAllParents,
  getParentById,
  getParentByUserId,
  createParentProfile,
  updateParent,
  submitContactForm,
  getContactSubmissions,
  joinWaitlist,
  getWaitlistCount
};
