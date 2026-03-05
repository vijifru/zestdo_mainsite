/**
 * Class/Activity Model
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Create a new class object
 */
const createClass = ({
  name,
  description,
  category,
  trainerId,
  apartmentId = null,
  icon = null,
  color = '#FF6B35',
  image = null,
  schedule = [],
  maxStudents = 20,
  price = 0,
  duration = 60
}) => {
  return {
    id: uuidv4(),
    name,
    description,
    category,
    trainerId,
    apartmentId,
    icon,
    color,
    image,
    schedule,
    maxStudents,
    enrolledCount: 0,
    price,
    duration, // in minutes
    status: 'active',
    rating: 0,
    totalReviews: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

/**
 * Class schema structure (for reference)
 */
const classSchema = {
  id: 'string (UUID)',
  name: 'string',
  description: 'string',
  category: 'string (Music, Dance, etc.)',
  trainerId: 'string (reference to trainer)',
  apartmentId: 'string (reference to apartment, optional)',
  icon: 'string (optional)',
  color: 'string (hex color)',
  image: 'string (URL, optional)',
  schedule: [
    {
      day: 'string (Monday, Tuesday, etc.)',
      startTime: 'string (HH:mm)',
      endTime: 'string (HH:mm)'
    }
  ],
  maxStudents: 'number',
  enrolledCount: 'number',
  price: 'number',
  duration: 'number (minutes)',
  status: 'string (active/inactive)',
  rating: 'number (0-5)',
  totalReviews: 'number',
  createdAt: 'ISO date string',
  updatedAt: 'ISO date string'
};

module.exports = {
  createClass,
  classSchema
};
