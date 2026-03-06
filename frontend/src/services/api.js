import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============================================
// Activities API
// ============================================

export const getActivities = async () => {
  const response = await api.get('/activities');
  return response.data;
};

export const getActivityById = async (id) => {
  const response = await api.get(`/activities/${id}`);
  return response.data;
};

// ============================================
// Testimonials API
// ============================================

export const getTestimonials = async () => {
  const response = await api.get('/testimonials');
  return response.data;
};

export const getTestimonialsByRole = async (role) => {
  const response = await api.get(`/testimonials/role/${role}`);
  return response.data;
};

// ============================================
// User Roles API
// ============================================

export const getUserRoles = async () => {
  const response = await api.get('/user-roles');
  return response.data;
};

// ============================================
// Why ZestDo API
// ============================================

export const getWhyZestDo = async () => {
  const response = await api.get('/why-zestdo');
  return response.data;
};

// ============================================
// Subscription Plans API
// ============================================

export const getSubscriptionPlans = async () => {
  const response = await api.get('/subscription-plans');
  return response.data;
};

export const getPopularPlan = async () => {
  const response = await api.get('/subscription-plans/popular');
  return response.data;
};

// ============================================
// Communities API
// ============================================

export const getCommunities = async () => {
  const response = await api.get('/communities');
  return response.data;
};

// ============================================
// Stats API
// ============================================

export const getStats = async () => {
  const response = await api.get('/stats');
  return response.data;
};

// ============================================
// Contact Form API
// ============================================

export const submitContactForm = async (data) => {
  const response = await api.post('/contact', data);
  return response.data;
};

// ============================================
// Waitlist API
// ============================================

export const joinWaitlist = async (data) => {
  const response = await api.post('/waitlist', data);
  return response.data;
};

export const getWaitlistCount = async () => {
  const response = await api.get('/waitlist/count');
  return response.data;
};

// ============================================
// Trainer Application API
// ============================================

export const submitTrainerApplication = async (data) => {
  const response = await api.post('/trainer-applications', data);
  return response.data;
};

// ============================================
// Apartment Inquiry API
// ============================================

export const submitApartmentInquiry = async (data) => {
  const response = await api.post('/apartment-inquiries', data);
  return response.data;
};

// ============================================
// Poster API
// ============================================

export const fetchPosters = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/posters');
    return response.data;
  } catch (error) {
    console.error('Error fetching posters:', error);
    return [];
  }
};

export const fetchPosterById = async (posterId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/posters/${posterId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching poster:', error);
    return null;
  }
};

export default api;
