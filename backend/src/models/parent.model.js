/**
 * Parent Model
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Create a new parent object
 */
const createParent = ({
  userId,
  name,
  email,
  phone = null,
  apartmentName = null,
  city = 'Bengaluru',
  children = []
}) => {
  return {
    id: uuidv4(),
    userId,
    name,
    email,
    phone,
    apartmentName,
    city,
    children,
    subscriptionPlan: null,
    subscriptionStatus: 'inactive',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

/**
 * Parent schema structure (for reference)
 */
const parentSchema = {
  id: 'string (UUID)',
  userId: 'string (reference to user)',
  name: 'string',
  email: 'string',
  phone: 'string (optional)',
  apartmentName: 'string (optional)',
  city: 'string',
  children: [
    {
      name: 'string',
      age: 'number',
      interests: ['string']
    }
  ],
  subscriptionPlan: 'string (optional)',
  subscriptionStatus: 'string (active/inactive)',
  createdAt: 'ISO date string',
  updatedAt: 'ISO date string'
};

module.exports = {
  createParent,
  parentSchema
};
