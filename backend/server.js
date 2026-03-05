/**
 * ZestDo API Server
 * Main entry point for the Express application
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

// Import route modules
const activitiesRoutes = require('./routes/activities');
const testimonialsRoutes = require('./routes/testimonials');
const plansRoutes = require('./routes/plans');
const contactRoutes = require('./routes/contact');
const waitlistRoutes = require('./routes/waitlist');
const trainersRoutes = require('./routes/trainers');
const apartmentsRoutes = require('./routes/apartments');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check routes
app.get('/api', (req, res) => {
  res.json({
    message: 'ZestDo API is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Mount route modules
app.use('/api/activities', activitiesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/subscription-plans', plansRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/trainer-applications', trainersRoutes);
app.use('/api/apartment-inquiries', apartmentsRoutes);
app.use('/api', statsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`ZestDo API server running on http://0.0.0.0:${PORT}`);
  console.log(`Health check: http://0.0.0.0:${PORT}/api/health`);
});
