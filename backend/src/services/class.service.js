/**
 * Class/Activity Service
 */

const { 
  getCollection, 
  addToCollection, 
  findById,
  findAllByField,
  updateInCollection,
  loadData
} = require('../config/db');
const { createClass } = require('../models/class.model');

/**
 * Get all classes/activities
 */
const getAllClasses = () => {
  return getCollection('activities') || getCollection('classes');
};

/**
 * Get active classes
 */
const getActiveClasses = () => {
  const classes = getAllClasses();
  return classes.filter(c => c.status === 'active' || !c.status);
};

/**
 * Get class by ID
 */
const getClassById = (id) => {
  // Try activities first (for backward compatibility with mock data)
  let classItem = findById('activities', id);
  if (!classItem) {
    classItem = findById('classes', id);
  }
  return classItem;
};

/**
 * Get classes by trainer ID
 */
const getClassesByTrainer = (trainerId) => {
  return findAllByField('classes', 'trainerId', trainerId);
};

/**
 * Get classes by apartment ID
 */
const getClassesByApartment = (apartmentId) => {
  return findAllByField('classes', 'apartmentId', apartmentId);
};

/**
 * Get classes by category
 */
const getClassesByCategory = (category) => {
  const classes = getAllClasses();
  return classes.filter(c => 
    c.category?.toLowerCase() === category.toLowerCase() ||
    c.name?.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Create a new class
 */
const createNewClass = (data) => {
  const newClass = createClass(data);
  addToCollection('classes', newClass);
  return newClass;
};

/**
 * Update class
 */
const updateClass = (id, updates) => {
  const success = updateInCollection('classes', id, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
  if (success) {
    return findById('classes', id);
  }
  return null;
};

/**
 * Get subscription plans
 */
const getSubscriptionPlans = () => {
  return getCollection('subscriptionPlans');
};

/**
 * Get popular plan
 */
const getPopularPlan = () => {
  const plans = getSubscriptionPlans();
  return plans.find(p => p.popular);
};

/**
 * Get testimonials
 */
const getTestimonials = () => {
  return getCollection('testimonials');
};

/**
 * Get testimonials by role
 */
const getTestimonialsByRole = (role) => {
  const testimonials = getTestimonials();
  return testimonials.filter(t => t.role?.toLowerCase() === role.toLowerCase());
};

/**
 * Get user roles info
 */
const getUserRoles = () => {
  return getCollection('userRoles');
};

/**
 * Get why ZestDo points
 */
const getWhyZestDo = () => {
  return getCollection('whyZestDoPoints');
};

/**
 * Get platform stats
 */
const getStats = () => {
  const data = loadData();
  return data.stats || {
    apartments: 50,
    trainers: 100,
    happyKids: 2000,
    activityCategories: 8
  };
};

module.exports = {
  getAllClasses,
  getActiveClasses,
  getClassById,
  getClassesByTrainer,
  getClassesByApartment,
  getClassesByCategory,
  createNewClass,
  updateClass,
  getSubscriptionPlans,
  getPopularPlan,
  getTestimonials,
  getTestimonialsByRole,
  getUserRoles,
  getWhyZestDo,
  getStats
};
