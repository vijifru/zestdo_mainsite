# ZestDo Backend API

This is the Express.js implementation of the ZestDo API server.

## Overview

The ZestDo backend provides API endpoints for the ZestDo web application, serving data for activities, testimonials, subscription plans, and more.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (or use the existing one) with the following variables:
   ```
   PORT=8000
   HOST=localhost
   CORS_ORIGIN=http://localhost:3000
   NODE_ENV=development
   ```

3. Start the server:
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- `GET /api` - API information
- `GET /api/health` - Health status

### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/:id` - Get activity by ID

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/role/:role` - Get testimonials by role

### Subscription Plans
- `GET /api/subscription-plans` - Get all subscription plans
- `GET /api/subscription-plans/popular` - Get the popular subscription plan

### General Data
- `GET /api/user-roles` - Get user roles information
- `GET /api/why-zestdo` - Get "Why ZestDo" points
- `GET /api/communities` - Get communities
- `GET /api/stats` - Get platform statistics

### Contact
- `GET /api/contact` - Get contact submissions
- `POST /api/contact` - Submit contact form

### Waitlist
- `GET /api/waitlist/count` - Get waitlist count
- `POST /api/waitlist` - Join waitlist

### Trainer Applications
- `POST /api/trainer-applications` - Submit trainer application

### Apartment Inquiries
- `POST /api/apartment-inquiries` - Submit apartment inquiry

### Posters
- `GET /api/posters` - Get all posters
- `GET /api/posters/:id` - Get poster by ID

## Data Storage

The API uses a JSON file (`data/mock.json`) as a mock database. All data is read from and written to this file.

## Development

This project uses:
- Express.js for the API server
- CORS middleware for cross-origin requests
- UUID for generating unique IDs
- Nodemon for development auto-reload
