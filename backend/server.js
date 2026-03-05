const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Load mock data
const dataPath = path.join(__dirname, 'data', 'mock.json');

const loadData = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading mock data:', error);
    return {};
  }
};

const saveData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving mock data:', error);
    return false;
  }
};

// ============================================
// API Routes
// ============================================

// Health check
app.get('/api', (req, res) => {
  res.json({ message: 'ZestDo API is running!', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// ============================================
// Activities Routes
// ============================================

// Get all activities
app.get('/api/activities', (req, res) => {
  const data = loadData();
  res.json(data.activities || []);
});

// Get activity by ID
app.get('/api/activities/:id', (req, res) => {
  const data = loadData();
  const activity = data.activities?.find(a => a.id === parseInt(req.params.id));
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).json({ error: 'Activity not found' });
  }
});

// ============================================
// Testimonials Routes
// ============================================

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
  const data = loadData();
  res.json(data.testimonials || []);
});

// Get testimonials by role (Parent, Trainer, Apartment Admin)
app.get('/api/testimonials/role/:role', (req, res) => {
  const data = loadData();
  const testimonials = data.testimonials?.filter(
    t => t.role.toLowerCase() === req.params.role.toLowerCase()
  );
  res.json(testimonials || []);
});

// ============================================
// User Roles Routes
// ============================================

// Get all user roles
app.get('/api/user-roles', (req, res) => {
  const data = loadData();
  res.json(data.userRoles || []);
});

// ============================================
// Why ZestDo Points Routes
// ============================================

// Get all why ZestDo points
app.get('/api/why-zestdo', (req, res) => {
  const data = loadData();
  res.json(data.whyZestDoPoints || []);
});

// ============================================
// Subscription Plans Routes
// ============================================

// Get all subscription plans
app.get('/api/subscription-plans', (req, res) => {
  const data = loadData();
  res.json(data.subscriptionPlans || []);
});

// Get popular plan
app.get('/api/subscription-plans/popular', (req, res) => {
  const data = loadData();
  const popularPlan = data.subscriptionPlans?.find(p => p.popular);
  if (popularPlan) {
    res.json(popularPlan);
  } else {
    res.status(404).json({ error: 'No popular plan found' });
  }
});

// ============================================
// Communities Routes
// ============================================

// Get all communities
app.get('/api/communities', (req, res) => {
  const data = loadData();
  res.json(data.communities || []);
});

// ============================================
// Stats Routes
// ============================================

// Get platform stats
app.get('/api/stats', (req, res) => {
  const data = loadData();
  res.json(data.stats || {});
});

// ============================================
// Contact Form Routes
// ============================================

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, userType, subject, message } = req.body;
  
  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'email', 'subject', 'message']
    });
  }

  const data = loadData();
  
  const newSubmission = {
    id: uuidv4(),
    name,
    email,
    phone: phone || null,
    userType: userType || 'other',
    subject,
    message,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  if (!data.contactSubmissions) {
    data.contactSubmissions = [];
  }
  
  data.contactSubmissions.push(newSubmission);
  saveData(data);

  res.status(201).json({ 
    success: true,
    message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    submission: newSubmission
  });
});

// Get all contact submissions (admin endpoint)
app.get('/api/contact', (req, res) => {
  const data = loadData();
  res.json(data.contactSubmissions || []);
});

// ============================================
// Waitlist Routes
// ============================================

// Join waitlist
app.post('/api/waitlist', (req, res) => {
  const { name, email, phone, userType, apartmentName, city } = req.body;
  
  // Validation
  if (!email) {
    return res.status(400).json({ 
      error: 'Email is required'
    });
  }

  const data = loadData();
  
  // Check if email already exists
  const existingSignup = data.waitlistSignups?.find(w => w.email === email);
  if (existingSignup) {
    return res.status(400).json({ 
      error: 'This email is already on the waitlist'
    });
  }

  const newSignup = {
    id: uuidv4(),
    name: name || null,
    email,
    phone: phone || null,
    userType: userType || 'parent',
    apartmentName: apartmentName || null,
    city: city || 'Bengaluru',
    createdAt: new Date().toISOString()
  };

  if (!data.waitlistSignups) {
    data.waitlistSignups = [];
  }
  
  data.waitlistSignups.push(newSignup);
  saveData(data);

  res.status(201).json({ 
    success: true,
    message: 'You have been added to the waitlist! We will notify you when we launch in your area.',
    signup: newSignup
  });
});

// Get waitlist count
app.get('/api/waitlist/count', (req, res) => {
  const data = loadData();
  res.json({ count: data.waitlistSignups?.length || 0 });
});

// ============================================
// Trainer Application Routes
// ============================================

// Submit trainer application
app.post('/api/trainer-applications', (req, res) => {
  const { name, email, phone, expertise, experience, city, message } = req.body;
  
  // Validation
  if (!name || !email || !expertise) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'email', 'expertise']
    });
  }

  const data = loadData();

  const newApplication = {
    id: uuidv4(),
    name,
    email,
    phone: phone || null,
    expertise,
    experience: experience || null,
    city: city || 'Bengaluru',
    message: message || null,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  if (!data.trainerApplications) {
    data.trainerApplications = [];
  }
  
  data.trainerApplications.push(newApplication);
  saveData(data);

  res.status(201).json({ 
    success: true,
    message: 'Thank you for your application! Our team will review it and get back to you within 48 hours.',
    application: newApplication
  });
});

// ============================================
// Apartment Partnership Routes
// ============================================

// Submit apartment partnership inquiry
app.post('/api/apartment-inquiries', (req, res) => {
  const { contactName, email, phone, apartmentName, city, unitsCount, message } = req.body;
  
  // Validation
  if (!contactName || !email || !apartmentName) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['contactName', 'email', 'apartmentName']
    });
  }

  const data = loadData();

  const newInquiry = {
    id: uuidv4(),
    contactName,
    email,
    phone: phone || null,
    apartmentName,
    city: city || 'Bengaluru',
    unitsCount: unitsCount || null,
    message: message || null,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  if (!data.apartmentInquiries) {
    data.apartmentInquiries = [];
  }
  
  data.apartmentInquiries.push(newInquiry);
  saveData(data);

  res.status(201).json({ 
    success: true,
    message: 'Thank you for your interest in partnering with ZestDo! Our team will contact you within 24 hours.',
    inquiry: newInquiry
  });
});

// ============================================
// Error handling
// ============================================

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
