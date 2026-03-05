# ZestDo - Product Requirements Document

## Project Overview
**Project Name:** ZestDo  
**Tagline:** Energy. Skill. Passion. Screen-Free Learning. Community Growth.  
**Type:** Apartment-Based Kids Activity Platform  
**Target Market:** Urban Apartments in India (Starting with Bengaluru)  
**Created:** December 2025

## Problem Statement
ZestDo is an apartment-based kids activity and learning platform designed to:
- Reduce children's screen time through engaging offline activities
- Enable trainers to conduct classes inside apartment communities
- Help parents discover and enroll kids in nearby activities
- Help apartments monetize underutilized amenities

## User Personas

### 1. Parents (Age 28-45)
- Want to reduce their children's screen time
- Seek safe, convenient learning options
- Prefer community-based activities
- Value flexible subscription plans

### 2. Activity Trainers
- Looking to reach multiple apartment communities
- Want to monetize their skills
- Need easy scheduling and payment management
- Seek to grow their student base

### 3. Apartment Associations / Admins
- Want to activate unused amenities
- Seeking additional revenue streams
- Desire increased community engagement
- Looking to enhance resident satisfaction

## Core Features

### Landing Page Sections
1. **Header Navigation**
   - Logo: ZestDo
   - Nav Links: Activities, How it Works, Pricing, About
   - CTAs: Login, Get Started

2. **Hero Section**
   - Headline: "Where Kids Discover Passion Beyond Screens"
   - Subtext: Apartment-Based Classes. Trusted Trainers. Screen-Free Growth.
   - CTAs: Explore Classes, Watch Demo
   - Stats Display: 50+ Apartments, 100+ Expert Trainers, 2000+ Happy Kids
   - Visual: App mockup with floating activity icons

3. **How It Works** (3 User Roles)
   - For Parents: Discovery, safety, flexibility, screen time reduction
   - For Trainers: Teaching opportunities, monetization, easy management
   - For Apartments: Amenity activation, community engagement, revenue share

4. **Featured Activities** (8 Activities)
   - Music, Dance, Robotics, Chess
   - Art & Craft, Yoga, Public Speaking, Sports Fitness

5. **Why ZestDo** (Problem vs Solution Comparison)
   - Traditional Problems: Screen time, unsafe travel, wasted amenities, limited options
   - ZestDo Solutions: Screen-free development, in-apartment classes, community learning, diverse activities

6. **Subscription Plans** (Pricing)
   - 1 Month: ₹999
   - 3 Months: ₹2,699 (Save ₹298) - Most Popular
   - 6 Months: ₹4,999 (Save ₹995)

7. **Testimonials**
   - Parent testimonial from Prestige Lakeside
   - Trainer testimonial (Chess Coach)
   - Apartment Admin testimonial from Brigade Gateway

8. **CTA Section**
   - Bold call-to-action: "Bring Learning Back to Community"
   - Multiple CTAs: Launch in My Apartment, Become a Trainer
   - Trust badges: Verified Trainers, Safe Environment, Community-Based

9. **Footer**
   - Company info and tagline
   - Links: For Parents, For Trainers, For Apartments
   - Contact: Bengaluru location, email, phone
   - Social media links
   - Legal: Privacy Policy, Terms of Service, Refund Policy

## Design System

### Brand Colors
- Primary Orange: #FF6B35 (Energy & enthusiasm)
- Secondary Purple: #4A3AFF (Creativity & learning)
- Accent Teal: #00C2A8 (Growth & wellness)

### Typography
- Primary Font: Balto (Medium for headings, Book for body)
- Fallback: Inter, system fonts
- Hero: 56px, Headings: 32-24px, Body: 18-14px

### Button Styles
- Primary CTA: Pill shape (26px radius), Orange background
- Secondary: Rounded rectangle (8px radius), Border style

### Layout
- Container max-width: 1200px
- Section padding: 80px vertical
- Grid layouts: Auto-fit with minimum 260-320px cards

### Animations
- Spring-based animations using Motion library
- Scroll-triggered reveals
- Hover lift effects on cards
- Floating icon animations in hero

## What's Been Implemented (December 2025)

### ✅ Phase 1: Frontend with Mock Data (COMPLETED)
- Created complete landing page with all 9 sections
- Implemented responsive design (mobile-first approach)
- Added Motion library for smooth animations
- Created mock.js with sample data:
  - 8 activities with images
  - 3 testimonials with profile photos
  - 3 user roles
  - 3 subscription plans
  - 4 problem/solution comparisons
- Followed pastel-ai design guidelines with ZestDo brand colors
- Implemented shadcn UI components
- Mobile-responsive header with hamburger menu
- All sections rendering correctly with proper spacing and styling

### ✅ Phase 1.5: Image Integration (COMPLETED)
- **Hero Section**: Added real community learning image showing children engaged in crafts workshop
- **Activities Section**: Integrated 8 activity-specific images:
  - Music: Child playing xylophone
  - Dance: Children in dance studio
  - Robotics: Girl with robot toy
  - Chess: Boy concentrating on chess game
  - Art & Craft: Colorful art supplies and paintings
  - Yoga: Child in yoga pose
  - Public Speaking: Young boy speaking
  - Sports: Children playing soccer
- **Featured Communities Section**: Added 2 modern apartment building images for partner communities
- **Testimonials**: Added authentic family/parent profile photos for testimonials
- All images are from Unsplash (unlicensed, commercially usable)
- Implemented hover effects and image overlays for better interactivity

### ✅ Phase 2: Static Pages (COMPLETED)
Created 7 additional static pages with full routing:

1. **About Page** (`/about`)
   - Company story and mission/vision
   - Core values showcase (4 values)
   - Team members section (3 founders)
   - Live statistics (50+ apartments, 100+ trainers, 2000+ children, 8+ activities)
   - Consistent design with main landing page

2. **Contact Page** (`/contact`)
   - Full contact form with validation
   - Contact information (address, email, phone, hours)
   - Quick links to For Parents/Trainers/Apartments pages
   - Form fields: name, email, phone, user type dropdown, subject, message
   - Form submission handler (mock - ready for backend integration)

3. **For Parents Page** (`/for-parents`)
   - 6 key benefits cards with icons
   - 4-step "How It Works" process
   - Featured parent testimonial
   - CTA section to explore activities
   - Designed to convert parents into subscribers

4. **For Trainers Page** (`/for-trainers`)
   - 6 trainer benefits (monetization, growth, flexibility)
   - Requirements list (6 requirements)
   - 5-step onboarding timeline
   - Featured trainer testimonial
   - Apply CTA with secondary "Learn More" option

5. **For Apartments Page** (`/for-apartments`)
   - 6 partnership benefits
   - Revenue model breakdown (20% share calculator)
   - Real case study: Brigade Gateway success story
   - 4-step partnership process
   - Featured admin testimonial
   - Dual CTAs: Schedule Call + Download Brochure

6. **Privacy Policy** (`/privacy-policy`)
   - Comprehensive 11-section policy
   - Covers data collection, usage, sharing
   - Child safety and privacy section
   - Data security measures
   - User rights (GDPR-compliant structure)
   - Contact information for privacy inquiries

7. **Terms of Service** (`/terms-of-service`)
   - Comprehensive 14-section agreement
   - Platform description and user accounts
   - User responsibilities (parents, trainers, admins)
   - Payment terms and cancellation policy
   - Liability disclaimers
   - Intellectual property rights
   - Governing law (India/Bengaluru jurisdiction)

**Routing Implementation:**
- React Router DOM integrated
- All pages accessible via clean URLs
- Active navigation link highlighting
- Updated Header with proper Link components
- Updated Footer with working internal links
- Smooth page transitions

**Design Consistency:**
- All pages follow ZestDo brand guidelines
- Consistent typography and color scheme
- Reusable components across pages
- Responsive layouts for all screen sizes
- Professional legal page formatting

### Mock Data Structure
Located in: `/app/frontend/src/data/mock.js`
- Activities: Icon, name, description, color, image URL
- Testimonials: Name, role, location, text, rating, image URL
- User roles: Role type, benefits, CTA text
- Subscription plans: Duration, price, features, popular flag
- Why ZestDo: Problem-solution pairs

## Architecture

### Frontend Stack
- React 19.0.0
- Motion (v12.35.0) for animations
- Shadcn UI components
- Tailwind CSS for styling
- Axios for API calls (future integration)
- React Router DOM for navigation

### Backend Stack (Not Yet Implemented)
- FastAPI
- MongoDB (Motor async driver)
- Python 3.x

## Next Action Items

### Priority P0 (Required for MVP)
1. **Backend Development**
   - Design MongoDB schemas for:
     - Users (parents, trainers, apartment admins)
     - Activities
     - Classes/Sessions
     - Subscriptions
     - Bookings
   - Create REST API endpoints:
     - User registration/authentication
     - Activity listing and filtering
     - Subscription management
     - Booking system
   - Integrate frontend with backend APIs
   - Remove mock data and connect to real database

2. **Authentication System**
   - Implement user registration (email/phone)
   - Login/logout functionality
   - Role-based access control (Parent/Trainer/Admin)
   - Session management

3. **Core User Flows**
   - Parent: Browse activities → View details → Subscribe → Book classes
   - Trainer: Register → List activities → Manage schedule → Track earnings
   - Admin: Onboard apartment → Manage facilities → View analytics

### Priority P1 (Post-MVP Enhancements)
1. Payment gateway integration (Razorpay for Indian market)
2. In-app messaging between parents and trainers
3. Progress tracking dashboard for parents
4. Trainer dashboard with analytics
5. Admin panel for apartment management
6. Email notifications (subscription confirmations, class reminders)
7. Search and filter functionality for activities
8. Location-based apartment discovery

### Priority P2 (Future Features)
1. Mobile app (React Native)
2. Video class recording/replay feature
3. Gamification and rewards for kids
4. Referral program
5. Review and rating system
6. Multi-language support
7. Advanced analytics dashboard
8. SMS notifications via Twilio

## Technical Debt & Notes
- Currently using placeholder emojis for floating icons (🎵🎨🤖💃)
- App mockup is a placeholder - needs actual app screenshot when mobile app is built
- All buttons are functional UI elements but not connected to backend
- Form submissions need backend API endpoints
- No data persistence currently (all data is static)

## Success Metrics (To Be Tracked)
- Number of apartment partnerships
- Active trainers on platform
- Total enrolled children
- Subscription conversion rate
- User retention rate
- Revenue per apartment
- Average class attendance

## API Contracts (To Be Defined)
Will be detailed once backend development begins. Expected endpoints:
- `/api/auth/*` - Authentication
- `/api/activities/*` - Activity management
- `/api/subscriptions/*` - Subscription plans
- `/api/bookings/*` - Class bookings
- `/api/users/*` - User profile management
- `/api/trainers/*` - Trainer operations
- `/api/apartments/*` - Apartment admin operations

---

**Last Updated:** December 2025  
**Status:** Phase 1 Complete - Frontend with Mock Data ✓
