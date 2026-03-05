/**
 * Apartment Service
 */

const { 
  getCollection, 
  addToCollection, 
  findById,
  updateInCollection 
} = require('../config/db');
const { createApartment, createApartmentInquiry } = require('../models/apartment.model');

/**
 * Get all apartments
 */
const getAllApartments = () => {
  return getCollection('apartments');
};

/**
 * Get active apartments
 */
const getActiveApartments = () => {
  const apartments = getCollection('apartments');
  return apartments.filter(a => a.status === 'active');
};

/**
 * Get communities (partner apartments)
 */
const getCommunities = () => {
  return getCollection('communities');
};

/**
 * Get apartment by ID
 */
const getApartmentById = (id) => {
  return findById('apartments', id);
};

/**
 * Create apartment
 */
const createApartmentProfile = (data) => {
  const apartment = createApartment(data);
  addToCollection('apartments', apartment);
  return apartment;
};

/**
 * Update apartment
 */
const updateApartment = (id, updates) => {
  const success = updateInCollection('apartments', id, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
  if (success) {
    return findById('apartments', id);
  }
  return null;
};

/**
 * Submit partnership inquiry
 */
const submitInquiry = (data) => {
  const inquiry = createApartmentInquiry(data);
  addToCollection('apartmentInquiries', inquiry);
  return inquiry;
};

/**
 * Get all inquiries
 */
const getInquiries = () => {
  return getCollection('apartmentInquiries');
};

module.exports = {
  getAllApartments,
  getActiveApartments,
  getCommunities,
  getApartmentById,
  createApartmentProfile,
  updateApartment,
  submitInquiry,
  getInquiries
};
