/**
 * Class Controller
 */

const classService = require('../services/class.service');
const { success, notFound } = require('../utils/response');

/**
 * Get all classes/activities
 * GET /api/classes
 */
const getAllClasses = async (req, res, next) => {
  try {
    const { category, active } = req.query;
    
    let classes;
    
    if (category) {
      classes = classService.getClassesByCategory(category);
    } else if (active === 'true') {
      classes = classService.getActiveClasses();
    } else {
      classes = classService.getAllClasses();
    }
    
    return success(res, classes);
  } catch (error) {
    next(error);
  }
};

/**
 * Get class by ID
 * GET /api/classes/:id
 */
const getClassById = async (req, res, next) => {
  try {
    const classItem = classService.getClassById(parseInt(req.params.id) || req.params.id);
    
    if (!classItem) {
      return notFound(res, 'Class not found');
    }
    
    return success(res, classItem);
  } catch (error) {
    next(error);
  }
};

/**
 * Get subscription plans
 * GET /api/classes/plans
 */
const getSubscriptionPlans = async (req, res, next) => {
  try {
    const plans = classService.getSubscriptionPlans();
    return success(res, plans);
  } catch (error) {
    next(error);
  }
};

/**
 * Get popular plan
 * GET /api/classes/plans/popular
 */
const getPopularPlan = async (req, res, next) => {
  try {
    const plan = classService.getPopularPlan();
    
    if (!plan) {
      return notFound(res, 'No popular plan found');
    }
    
    return success(res, plan);
  } catch (error) {
    next(error);
  }
};

/**
 * Get testimonials
 * GET /api/classes/testimonials
 */
const getTestimonials = async (req, res, next) => {
  try {
    const { role } = req.query;
    
    const testimonials = role
      ? classService.getTestimonialsByRole(role)
      : classService.getTestimonials();
    
    return success(res, testimonials);
  } catch (error) {
    next(error);
  }
};

/**
 * Get user roles info
 * GET /api/classes/user-roles
 */
const getUserRoles = async (req, res, next) => {
  try {
    const userRoles = classService.getUserRoles();
    return success(res, userRoles);
  } catch (error) {
    next(error);
  }
};

/**
 * Get why ZestDo points
 * GET /api/classes/why-zestdo
 */
const getWhyZestDo = async (req, res, next) => {
  try {
    const points = classService.getWhyZestDo();
    return success(res, points);
  } catch (error) {
    next(error);
  }
};

/**
 * Get platform stats
 * GET /api/classes/stats
 */
const getStats = async (req, res, next) => {
  try {
    const stats = classService.getStats();
    return success(res, stats);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  getSubscriptionPlans,
  getPopularPlan,
  getTestimonials,
  getUserRoles,
  getWhyZestDo,
  getStats
};
