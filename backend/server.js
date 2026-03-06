/**
 * ZestDo API Server
 * Express.js application with modular routes
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// ============================================
// Database Service (mock.json)
// ============================================

const DATA_PATH = path.join(__dirname, 'data', 'mock.json');

async function loadData() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading data: ${error}`);
    return {};
  }
}

async function saveData(data) {
  try {
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error saving data: ${error}`);
    return false;
  }
}

async function getCollection(name) {
  const data = await loadData();
  return data[name] || [];
}

async function addToCollection(name, item) {
  const data = await loadData();
  if (!data[name]) {
    data[name] = [];
  }
  data[name].push(item);
  return saveData(data);
}

// ============================================
// Express App
// ============================================

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// Health Routes
// ============================================

app.get('/api', (req, res) => {
  res.json({
    message: "ZestDo API is running!",
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// ============================================
// Activities Routes
// ============================================

app.get('/api/activities', async (req, res) => {
  const activities = await getCollection("activities");
  res.json(activities);
});

app.get('/api/activities/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const activities = await getCollection("activities");
  const activity = activities.find(a => a.id === id);
  
  if (!activity) {
    return res.status(404).json({ error: "Activity not found" });
  }
  
  res.json(activity);
});

// ============================================
// Testimonials Routes
// ============================================

app.get('/api/testimonials', async (req, res) => {
  const testimonials = await getCollection("testimonials");
  res.json(testimonials);
});

app.get('/api/testimonials/role/:role', async (req, res) => {
  const role = req.params.role;
  const testimonials = await getCollection("testimonials");
  const filteredTestimonials = testimonials.filter(
    t => t.role.toLowerCase() === role.toLowerCase()
  );
  
  res.json(filteredTestimonials);
});

// ============================================
// Subscription Plans Routes
// ============================================

app.get('/api/subscription-plans', async (req, res) => {
  const plans = await getCollection("subscriptionPlans");
  res.json(plans);
});

app.get('/api/subscription-plans/popular', async (req, res) => {
  const plans = await getCollection("subscriptionPlans");
  const popularPlan = plans.find(p => p.popular);
  
  if (!popularPlan) {
    return res.status(404).json({ error: "No popular plan found" });
  }
  
  res.json(popularPlan);
});

// ============================================
// General Data Routes
// ============================================

app.get('/api/user-roles', async (req, res) => {
  const userRoles = await getCollection("userRoles");
  res.json(userRoles);
});

app.get('/api/why-zestdo', async (req, res) => {
  const whyZestDo = await getCollection("whyZestDoPoints");
  res.json(whyZestDo);
});

app.get('/api/communities', async (req, res) => {
  const communities = await getCollection("communities");
  res.json(communities);
});

app.get('/api/stats', async (req, res) => {
  const data = await loadData();
  res.json(data.stats || {});
});

// ============================================
// Contact Routes
// ============================================

app.get('/api/contact', async (req, res) => {
  const contacts = await getCollection("contactSubmissions");
  res.json(contacts);
});

app.post('/api/contact', async (req, res) => {
  const data = req.body;
  
  if (!data.name || !data.email || !data.subject || !data.message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  const submission = {
    id: uuidv4(),
    name: data.name,
    email: data.email,
    phone: data.phone || "",
    userType: data.userType || "other",
    subject: data.subject,
    message: data.message,
    createdAt: new Date().toISOString(),
    status: "pending"
  };
  
  await addToCollection("contactSubmissions", submission);
  
  res.json({
    success: true,
    message: "Thank you for contacting us! We will get back to you within 24 hours.",
    submission
  });
});

// ============================================
// Waitlist Routes
// ============================================

app.get('/api/waitlist/count', async (req, res) => {
  const waitlist = await getCollection("waitlistSignups");
  res.json({ count: waitlist.length });
});

app.post('/api/waitlist', async (req, res) => {
  const data = req.body;
  
  if (!data.email) {
    return res.status(400).json({ error: "Email is required" });
  }
  
  const waitlist = await getCollection("waitlistSignups");
  if (waitlist.some(w => w.email === data.email)) {
    return res.status(400).json({ error: "This email is already on the waitlist" });
  }
  
  const signup = {
    id: uuidv4(),
    name: data.name || "",
    email: data.email,
    phone: data.phone || "",
    userType: data.userType || "parent",
    apartmentName: data.apartmentName || "",
    city: data.city || "Bengaluru",
    createdAt: new Date().toISOString()
  };
  
  await addToCollection("waitlistSignups", signup);
  
  res.json({
    success: true,
    message: "You have been added to the waitlist!",
    signup
  });
});

// ============================================
// Trainer Application Routes
// ============================================

app.post('/api/trainer-applications', async (req, res) => {
  const data = req.body;
  
  if (!data.name || !data.email || !data.expertise) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  const application = {
    id: uuidv4(),
    name: data.name,
    email: data.email,
    phone: data.phone || "",
    expertise: data.expertise,
    experience: data.experience || "",
    city: data.city || "Bengaluru",
    message: data.message || "",
    createdAt: new Date().toISOString(),
    status: "pending"
  };
  
  await addToCollection("trainerApplications", application);
  
  res.json({
    success: true,
    message: "Thank you for your application!",
    application
  });
});

// ============================================
// Apartment Inquiry Routes
// ============================================

app.post('/api/apartment-inquiries', async (req, res) => {
  const data = req.body;
  
  if (!data.contactName || !data.email || !data.apartmentName) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  const inquiry = {
    id: uuidv4(),
    contactName: data.contactName,
    email: data.email,
    phone: data.phone || "",
    apartmentName: data.apartmentName,
    city: data.city || "Bengaluru",
    unitsCount: data.unitsCount || "",
    message: data.message || "",
    createdAt: new Date().toISOString(),
    status: "pending"
  };
  
  await addToCollection("apartmentInquiries", inquiry);
  
  res.json({
    success: true,
    message: "Thank you for your interest!",
    inquiry
  });
});

// ============================================
// Posters Routes
// ============================================

app.get('/api/posters', async (req, res) => {
  const posters = await getCollection("posters");
  res.json(posters);
});

app.get('/api/posters/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const posters = await getCollection("posters");
  const poster = posters.find(p => p.id === id);
  
  if (!poster) {
    return res.status(404).json({ error: "Poster not found" });
  }
  
  res.json(poster);
});

// ============================================
// Start Server
// ============================================

app.listen(PORT, () => {
  console.log(`ZestDo API server running on port ${PORT}`);
});

module.exports = app; // For testing purposes
