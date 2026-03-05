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

## Bug Fixes (December 2025)

### JSX Syntax Errors - RESOLVED ✅
**Issue:** Five static page files had JSX syntax errors (missing closing `</div>` and `</section>` tags) that prevented the React application from compiling.

**Affected Files:**
- `/app/frontend/src/pages/About.jsx`
- `/app/frontend/src/pages/Contact.jsx`
- `/app/frontend/src/pages/ForApartments.jsx`
- `/app/frontend/src/pages/ForParents.jsx`
- `/app/frontend/src/pages/ForTrainers.jsx`

**Root Cause:** A previous refactor to fix a `useLocation` routing error involved moving `<Header>` and `<Footer>` components into each static page. This process corrupted the JSX structure of several files due to imprecise `sed` commands.

**Resolution:** Rewrote all 5 affected files with proper JSX tag structure. All pages now render correctly.

**Verification:** All 6 main pages tested and confirmed working:
- Home (`/`)
- About (`/about`)
- Contact (`/contact`)
- For Parents (`/for-parents`)
- For Trainers (`/for-trainers`)
- For Apartments (`/for-apartments`)

---

## Feature Addition: App Download Links (December 2025)

### Added App Download Links ✅
**Feature:** Added Android (Google Play) and iOS (App Store) download links for both Parent and Trainer apps throughout the site.

**Implementation:**
- **Footer:** New "Parent App" and "Trainer App" sections with store badges
- **For Parents page:** Dedicated app download card with feature highlights
- **For Trainers page:** Dedicated app download card with trainer-specific features
- **New component:** `AppDownload.jsx` - Reusable component for app download sections

**Links (Dummy - Ready for real URLs):**
- Parent App Android: `https://play.google.com/store/apps/details?id=com.zestdo.parent`
- Parent App iOS: `https://apps.apple.com/app/zestdo-parent/id123456789`
- Trainer App Android: `https://play.google.com/store/apps/details?id=com.zestdo.trainer`
- Trainer App iOS: `https://apps.apple.com/app/zestdo-trainer/id987654321`

**Styling:** 
- Orange theme for Parent app sections
- Purple theme for Trainer app sections
- Responsive design for all screen sizes

---

## Feature Addition: Backend API with Mock Database (December 2025)

### Backend Implementation ✅
**Feature:** Created a FastAPI backend with mock.json as the database, integrated with the frontend.

**Backend Endpoints:**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/activities` | GET | Get all activities |
| `/api/activities/:id` | GET | Get activity by ID |
| `/api/testimonials` | GET | Get all testimonials |
| `/api/testimonials/role/:role` | GET | Get testimonials by role |
| `/api/user-roles` | GET | Get user roles info |
| `/api/why-zestdo` | GET | Get why ZestDo points |
| `/api/subscription-plans` | GET | Get subscription plans |
| `/api/subscription-plans/popular` | GET | Get popular plan |
| `/api/communities` | GET | Get partner communities |
| `/api/stats` | GET | Get platform statistics |
| `/api/contact` | POST | Submit contact form |
| `/api/contact` | GET | Get contact submissions |
| `/api/waitlist` | POST | Join waitlist |
| `/api/waitlist/count` | GET | Get waitlist count |
| `/api/trainer-applications` | POST | Submit trainer application |
| `/api/apartment-inquiries` | POST | Submit apartment inquiry |

**Frontend Integration:**
- Created `/app/frontend/src/services/api.js` - API service layer
- Updated components to fetch data from API:
  - `Activities.jsx` - Loads activities from API
  - `Testimonials.jsx` - Loads testimonials from API
  - `HowItWorks.jsx` - Loads user roles from API
  - `WhyZestDo.jsx` - Loads comparison points from API
  - `AppShowcase.jsx` - Loads subscription plans from API
  - `FeaturedCommunities.jsx` - Loads communities from API
  - `Contact.jsx` - Submits contact form to API

**Database File:**
- `/app/backend/data/mock.json` - JSON file storing all data

**Testing:**
- All API endpoints tested via curl
- Contact form submission verified working
- Data persists to mock.json file

---

## Code Architecture Refactoring (December 2025)

### Backend Restructured ✅
**New folder structure:**
```
/app/backend/
├── server.py           # Main entry point, route registration
├── routes/             # API route handlers
│   ├── activities.py
│   ├── testimonials.py
│   ├── plans.py
│   ├── contact.py
│   ├── waitlist.py
│   ├── trainers.py
│   ├── apartments.py
│   └── stats.py
├── models/
│   └── schemas.py      # Pydantic models
├── services/
│   └── database.py     # Mock.json CRUD operations
├── utils/
├── data/
│   └── mock.json       # JSON database
└── .env
```

### Frontend Redux Toolkit Integration ✅
**New state management structure:**
```
/app/frontend/src/
├── store/
│   ├── index.js        # Store configuration
│   └── slices/
│       ├── activitiesSlice.js
│       ├── testimonialsSlice.js
│       ├── userRolesSlice.js
│       ├── plansSlice.js
│       ├── communitiesSlice.js
│       ├── statsSlice.js
│       ├── whyZestDoSlice.js
│       └── contactSlice.js
├── services/
│   └── api.js          # Axios API service
└── components/         # Updated to use Redux
```

**Updated Components:**
- `Activities.jsx` - Uses `useDispatch` & `useSelector`
- `Testimonials.jsx` - Uses Redux for testimonials state
- `HowItWorks.jsx` - Uses Redux for user roles
- `WhyZestDo.jsx` - Uses Redux for comparison points
- `AppShowcase.jsx` - Uses Redux for subscription plans
- `FeaturedCommunities.jsx` - Uses Redux for communities
- `Contact.jsx` - Uses Redux for form submission state

**Redux Features:**
- Async thunks for API calls
- Caching (prevents re-fetching if data exists)
- Form state management (loading, success, error)
- Auto form reset on success/unmount

---

**Last Updated:** December 2025  
**Status:** Phase 3 Complete - Backend Restructured + Redux Integrated ✓
