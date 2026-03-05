/**
 * Apartment Model
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Create a new apartment object
 */
const createApartment = ({
  name,
  location,
  city = 'Bengaluru',
  adminUserId = null,
  contactName = null,
  contactEmail = null,
  contactPhone = null,
  unitsCount = null,
  amenities = []
}) => {
  return {
    id: uuidv4(),
    name,
    location,
    city,
    adminUserId,
    contactName,
    contactEmail,
    contactPhone,
    unitsCount,
    amenities,
    activitiesCount: 0,
    trainersCount: 0,
    status: 'active',
    partnerSince: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

/**
 * Create apartment inquiry
 */
const createApartmentInquiry = ({
  contactName,
  email,
  phone = null,
  apartmentName,
  city = 'Bengaluru',
  unitsCount = null,
  message = null
}) => {
  return {
    id: uuidv4(),
    contactName,
    email,
    phone,
    apartmentName,
    city,
    unitsCount,
    message,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
};

/**
 * Apartment schema structure (for reference)
 */
const apartmentSchema = {
  id: 'string (UUID)',
  name: 'string',
  location: 'string',
  city: 'string',
  adminUserId: 'string (reference to user, optional)',
  contactName: 'string (optional)',
  contactEmail: 'string (optional)',
  contactPhone: 'string (optional)',
  unitsCount: 'number (optional)',
  amenities: ['string'],
  activitiesCount: 'number',
  trainersCount: 'number',
  status: 'string (active/inactive)',
  partnerSince: 'ISO date string',
  createdAt: 'ISO date string',
  updatedAt: 'ISO date string'
};

module.exports = {
  createApartment,
  createApartmentInquiry,
  apartmentSchema
};
