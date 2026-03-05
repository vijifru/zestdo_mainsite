# ZestDo Backend API

A Node.js/Express backend for the ZestDo platform - Apartment-Based Kids Activity Platform.

## Tech Stack
- Node.js
- Express.js
- JSON file database (mock.json)
- JWT Authentication

## Folder Structure
```
src/
├── config/        # Configuration files
├── routes/        # Route definitions
├── controllers/   # Request handlers
├── services/      # Business logic
├── models/        # Data models
├── middlewares/   # Custom middlewares
├── utils/         # Utility functions
└── validations/   # Request validations
```

## API Endpoints

### Auth
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Parents
- GET /api/parents - Get all parents
- GET /api/parents/:id - Get parent by ID
- PUT /api/parents/:id - Update parent

### Trainers
- GET /api/trainers - Get all trainers
- POST /api/trainers/apply - Apply as trainer
- PUT /api/trainers/:id - Update trainer

### Apartments
- GET /api/apartments - Get all apartments
- POST /api/apartments/inquire - Submit inquiry
- GET /api/apartments/:id - Get apartment by ID

### Classes
- GET /api/classes - Get all classes/activities
- GET /api/classes/:id - Get class by ID

## Running the Server
```bash
npm install
npm start
```

## Environment Variables
```
PORT=8001
JWT_SECRET=your-secret-key
NODE_ENV=development
```
