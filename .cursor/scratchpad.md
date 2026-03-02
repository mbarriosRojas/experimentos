# Scratchpad - Mi App de Tareas

## Project Overview
- **Name**: Mi App de Tareas
- **Frontend**: Angular
- **Backend**: Node.js/Express
- **Database**: MongoDB
- **Purpose**: Task management application with user authentication

## Project Status
**Current Phase**: Database Setup (Phase 2)
**Last Updated**: 2026-03-02
**Architect Phase**: COMPLETED ✅

## Phases
1. [x] Architecture & Planning (architect subagent) - COMPLETED
2. [ ] Database Setup (database subagent)
3. [ ] Backend Development (backend subagent)
4. [ ] Frontend Development (frontend subagent)
5. [ ] Integration (integrator subagent)
6. [ ] Verification (verifier subagent)
7. [ ] Documentation & PR

---

# ARCHITECTURE DOCUMENTATION

## System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Angular Frontend (Port 4200)                │   │
│  │  - Components (Smart/Presentational)                  │   │
│  │  - Services (HTTP, Auth, Task)                        │   │
│  │  - Guards (Auth Guard)                                │   │
│  │  - Interceptors (JWT, Error)                          │   │
│  │  - Routing & State Management                         │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST (CORS enabled)
                            │ JSON payload
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │      Node.js/Express Backend (Port 3000)              │   │
│  │                                                        │   │
│  │  Middleware Stack:                                     │   │
│  │  - Helmet (Security Headers)                           │   │
│  │  - CORS (Cross-Origin)                                 │   │
│  │  - Morgan (Logging)                                    │   │
│  │  - JSON Parser                                         │   │
│  │  - Auth Middleware (JWT Verification)                  │   │
│  │  - Validators (express-validator)                      │   │
│  │  - Error Handler                                       │   │
│  │                                                        │   │
│  │  Routes:                                               │   │
│  │  - /api/v1/auth/* (Public)                            │   │
│  │  - /api/v1/tasks/* (Protected)                        │   │
│  │                                                        │   │
│  │  Controllers:                                          │   │
│  │  - authController (register, login)                   │   │
│  │  - taskController (CRUD operations)                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Mongoose ODM
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           MongoDB Database                            │   │
│  │                                                        │   │
│  │  Collections:                                          │   │
│  │  - users                                               │   │
│  │    • _id, username, email, password, createdAt        │   │
│  │                                                        │   │
│  │  - tasks                                               │   │
│  │    • _id, title, description, completed, priority,    │   │
│  │      dueDate, userId, createdAt, updatedAt            │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Principles
- **Separation of Concerns**: Clear separation between frontend, backend, and database
- **RESTful API Design**: Following REST conventions for predictable API behavior
- **Authentication & Authorization**: JWT-based stateless authentication
- **Security First**: Helmet, CORS, input validation, password hashing
- **Scalability**: Modular structure allows for easy feature additions
- **Error Handling**: Centralized error handling with consistent responses

---

## API Specifications

### Base URL
```
Development: http://localhost:3000/api/v1
```

### Authentication Endpoints

#### 1. Register User
```
POST /api/v1/auth/register

Request Body:
{
  "username": "string (required, min: 3, max: 30)",
  "email": "string (required, valid email)",
  "password": "string (required, min: 6)"
}

Success Response (201):
{
  "success": true,
  "data": {
    "user": {
      "_id": "string",
      "username": "string",
      "email": "string",
      "createdAt": "date"
    },
    "token": "JWT token string"
  }
}

Error Response (400):
{
  "success": false,
  "error": "Error message"
}
```

#### 2. Login User
```
POST /api/v1/auth/login

Request Body:
{
  "email": "string (required)",
  "password": "string (required)"
}

Success Response (200):
{
  "success": true,
  "data": {
    "user": {
      "_id": "string",
      "username": "string",
      "email": "string"
    },
    "token": "JWT token string"
  }
}

Error Response (401):
{
  "success": false,
  "error": "Invalid credentials"
}
```

### Task Endpoints (All require authentication)

**Authentication Header Required:**
```
Authorization: Bearer <JWT_TOKEN>
```

#### 3. Get All Tasks
```
GET /api/v1/tasks

Query Parameters (optional):
- completed: boolean (filter by completion status)
- priority: string (low|medium|high)
- sortBy: string (createdAt|dueDate|priority)
- order: string (asc|desc)

Success Response (200):
{
  "success": true,
  "count": "number",
  "data": [
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": "boolean",
      "priority": "string",
      "dueDate": "date (optional)",
      "userId": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

#### 4. Get Single Task
```
GET /api/v1/tasks/:id

Success Response (200):
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "priority": "string",
    "dueDate": "date (optional)",
    "userId": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}

Error Response (404):
{
  "success": false,
  "error": "Task not found"
}
```

#### 5. Create Task
```
POST /api/v1/tasks

Request Body:
{
  "title": "string (required, max: 200)",
  "description": "string (optional, max: 1000)",
  "priority": "string (optional, enum: low|medium|high, default: medium)",
  "dueDate": "date (optional, ISO 8601 format)"
}

Success Response (201):
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": false,
    "priority": "string",
    "dueDate": "date",
    "userId": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

#### 6. Update Task
```
PUT /api/v1/tasks/:id

Request Body (all fields optional):
{
  "title": "string (max: 200)",
  "description": "string (max: 1000)",
  "completed": "boolean",
  "priority": "string (enum: low|medium|high)",
  "dueDate": "date (ISO 8601 format)"
}

Success Response (200):
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "priority": "string",
    "dueDate": "date",
    "userId": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}

Error Response (404):
{
  "success": false,
  "error": "Task not found"
}

Error Response (403):
{
  "success": false,
  "error": "Not authorized to update this task"
}
```

#### 7. Delete Task
```
DELETE /api/v1/tasks/:id

Success Response (200):
{
  "success": true,
  "data": {}
}

Error Response (404):
{
  "success": false,
  "error": "Task not found"
}

Error Response (403):
{
  "success": false,
  "error": "Not authorized to delete this task"
}
```

### Error Response Format

All errors follow consistent format:
```json
{
  "success": false,
  "error": "Error message here"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 401: Unauthorized (authentication required)
- 403: Forbidden (not authorized for this resource)
- 404: Not Found
- 500: Internal Server Error

---

## Data Models

### User Model (MongoDB Schema)

```javascript
{
  _id: ObjectId,                    // Auto-generated by MongoDB
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [isEmail validator]
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false                   // Don't return in queries by default
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes:
// - email (unique)
// - username (unique)

// Methods:
// - matchPassword(enteredPassword): Compare hashed passwords
// - Pre-save hook: Hash password before saving
```

### Task Model (MongoDB Schema)

```javascript
{
  _id: ObjectId,                    // Auto-generated by MongoDB
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: {
    type: Date,
    default: null
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true,
    index: true                     // Index for faster queries
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes:
// - userId (for faster user-specific queries)
// - compound index: (userId, createdAt) for sorting
// - compound index: (userId, completed) for filtering

// Pre-save hook: Update updatedAt on modifications
```

---

## Technology Stack & Versions

### Backend
- **Node.js**: >=18.0.0 (LTS version recommended)
- **Express**: ^4.18.2 (web framework)
- **Mongoose**: ^8.0.0 (MongoDB ODM)
- **jsonwebtoken**: ^9.0.2 (JWT authentication)
- **bcryptjs**: ^2.4.3 (password hashing)
- **dotenv**: ^16.3.1 (environment variables)
- **cors**: ^2.8.5 (CORS middleware)
- **helmet**: ^7.1.0 (security headers)
- **morgan**: ^1.10.0 (HTTP logging)
- **express-validator**: ^7.0.1 (input validation)

### Development Dependencies
- **nodemon**: ^3.0.1 (auto-restart)
- **jest**: ^29.7.0 (testing)
- **supertest**: ^6.3.3 (API testing)

### Frontend (to be installed by frontend subagent)
- **Angular**: Latest stable version (17.x)
- **Angular Material**: Latest compatible version
- **RxJS**: Included with Angular
- **TypeScript**: Included with Angular

### Database
- **MongoDB**: 6.0 or higher
- Local development or MongoDB Atlas

---

## Security Considerations

### 1. Authentication & Authorization
- **JWT Strategy**: Stateless authentication using JSON Web Tokens
- **Token Storage**: Frontend stores token in localStorage (consider httpOnly cookies for production)
- **Token Expiration**: 7 days default (configurable)
- **Password Hashing**: bcryptjs with salt rounds (10)
- **Protected Routes**: Middleware verifies JWT on protected endpoints

### 2. Input Validation
- **Server-side validation**: express-validator on all input
- **Client-side validation**: Angular reactive forms validation
- **Sanitization**: Trim whitespace, validate data types
- **SQL Injection**: N/A (using MongoDB with Mongoose)
- **NoSQL Injection**: Mongoose sanitizes queries

### 3. Security Headers
- **Helmet.js**: Sets secure HTTP headers
  - X-Content-Type-Options
  - X-Frame-Options
  - X-XSS-Protection
  - Strict-Transport-Security (HTTPS)

### 4. CORS Configuration
- **Allowed Origins**: Environment-specific (localhost in dev, domain in prod)
- **Credentials**: Allow credentials for cookie-based auth
- **Methods**: GET, POST, PUT, DELETE
- **Headers**: Authorization, Content-Type

### 5. Error Handling
- **No Sensitive Data**: Error messages don't expose system details
- **Consistent Format**: Standard error response structure
- **Logging**: Morgan logs requests, errors logged to console/file

### 6. Environment Variables
- **Sensitive Data**: API keys, JWT secret, DB credentials in .env
- **Not Committed**: .env in .gitignore
- **Template Provided**: .env.example for reference

### 7. Rate Limiting (Future Enhancement)
- Consider adding express-rate-limit for production

### 8. HTTPS
- Required for production deployment
- Protects token transmission

---

## Development vs Production Environments

### Development
- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:4200
- **Database**: Local MongoDB or MongoDB Atlas
- **CORS**: Enabled for localhost:4200
- **Logging**: Verbose (Morgan 'dev' mode)
- **Error Details**: Full stack traces

### Production (Future)
- **Backend**: HTTPS with domain
- **Frontend**: HTTPS with domain
- **Database**: MongoDB Atlas (recommended) or self-hosted
- **CORS**: Restricted to production domain
- **Logging**: Production mode (structured logs)
- **Error Details**: Generic messages only
- **Environment Variables**: Secure secrets management
- **Process Manager**: PM2 or similar
- **Reverse Proxy**: Nginx recommended

---

## Folder Structure Created

```
/workspace/
├── .cursor/
│   └── scratchpad.md              # This file - project documentation
├── .git/                           # Git repository
├── backend/                        # Backend API application
│   ├── src/
│   │   ├── config/                 # Configuration files
│   │   │   └── README.md
│   │   ├── controllers/            # Route controllers
│   │   │   └── README.md
│   │   ├── middleware/             # Custom middleware
│   │   │   └── README.md
│   │   ├── models/                 # Mongoose models
│   │   │   └── README.md
│   │   ├── routes/                 # API routes
│   │   │   └── README.md
│   │   └── utils/                  # Utility functions
│   │       └── README.md
│   ├── tests/                      # Test files
│   ├── .env.example                # Environment template
│   ├── package.json                # Dependencies & scripts
│   └── README.md                   # Backend documentation
├── frontend/                       # Angular application (to be initialized)
│   └── README.md                   # Frontend documentation
├── .gitignore                      # Git ignore rules
└── README.md                       # Project overview
```

---

## Next Steps for Other Subagents

### DATABASE Subagent Tasks
1. Review data model specifications above
2. Create `/backend/src/config/database.js` - MongoDB connection
3. Create `/backend/src/models/User.js` - User model with:
   - Schema as specified above
   - Password hashing pre-save hook
   - matchPassword method for authentication
   - Proper indexes
4. Create `/backend/src/models/Task.js` - Task model with:
   - Schema as specified above
   - userId reference to User model
   - updatedAt update hook
   - Proper indexes
5. Test database connection
6. Update scratchpad with completion status

### BACKEND Subagent Tasks
1. Create `/backend/src/config/env.js` - Environment configuration
2. Create `/backend/src/utils/generateToken.js` - JWT token generation
3. Create `/backend/src/utils/asyncHandler.js` - Async error wrapper
4. Create `/backend/src/middleware/authMiddleware.js` - JWT verification
5. Create `/backend/src/middleware/errorHandler.js` - Error handling
6. Create `/backend/src/middleware/validators.js` - Input validation
7. Create `/backend/src/controllers/authController.js` - Auth logic
8. Create `/backend/src/controllers/taskController.js` - Task CRUD
9. Create `/backend/src/routes/authRoutes.js` - Auth routes
10. Create `/backend/src/routes/taskRoutes.js` - Task routes
11. Create `/backend/src/server.js` - Application entry point
12. Install dependencies: `cd backend && npm install`
13. Create `.env` file from `.env.example`
14. Test all endpoints
15. Update scratchpad with completion status

### FRONTEND Subagent Tasks
1. Initialize Angular app: `cd frontend && ng new . --routing --style=scss`
2. Install Angular Material: `ng add @angular/material`
3. Create folder structure:
   - `src/app/core/` - Services, guards, interceptors
   - `src/app/shared/` - Shared components
   - `src/app/features/auth/` - Authentication feature
   - `src/app/features/tasks/` - Task management feature
   - `src/app/models/` - TypeScript interfaces
4. Create models/interfaces:
   - User interface
   - Task interface
   - API response interfaces
5. Create core services:
   - AuthService (login, register, token management)
   - TaskService (CRUD operations)
   - HTTP interceptor (add JWT to requests)
   - Auth guard (protect routes)
6. Create authentication components:
   - LoginComponent
   - RegisterComponent
7. Create task components:
   - TaskListComponent
   - TaskFormComponent (create/edit)
   - TaskItemComponent
8. Implement routing with guards
9. Create environment configurations (API URL)
10. Test integration with backend
11. Update scratchpad with completion status

### INTEGRATOR Subagent Tasks
1. Verify backend is running and accessible
2. Verify frontend is running and accessible
3. Test CORS configuration
4. Test complete user flow:
   - User registration
   - User login
   - Token storage and transmission
   - Create task
   - Read tasks
   - Update task
   - Delete task
   - Logout
5. Verify error handling across stack
6. Check responsive design
7. Performance testing
8. Update scratchpad with integration status

### VERIFIER Subagent Tasks
1. Run backend tests: `cd backend && npm test`
2. Test all API endpoints manually
3. Test frontend functionality
4. Cross-browser testing (Chrome, Firefox, Safari)
5. Security audit:
   - JWT implementation
   - Password hashing
   - Input validation
   - CORS configuration
   - Error messages (no sensitive data)
6. Code quality check:
   - Consistent code style
   - Proper error handling
   - Comments where needed
   - No console.logs in production code
7. Documentation completeness
8. Create final report
9. Update scratchpad with verification results

---

## Integration Points

### Frontend → Backend
- **Protocol**: HTTP/HTTPS with JSON payloads
- **Base URL**: `http://localhost:3000/api/v1` (environment configurable)
- **Authentication**: JWT token in Authorization header
- **Error Handling**: HTTP status codes + JSON error format

### Backend → Database
- **Connection**: Mongoose ODM
- **Connection String**: From environment variable
- **Connection Pooling**: Handled by Mongoose
- **Error Handling**: Try-catch with async/await

### Data Flow Example (Create Task)
1. User fills form in Angular component
2. Component calls TaskService.createTask(taskData)
3. TaskService makes HTTP POST to `/api/v1/tasks`
4. HTTP interceptor adds JWT token to headers
5. Backend auth middleware verifies JWT
6. Backend validator validates request body
7. Task controller receives validated data
8. Controller calls Task.create() with userId from JWT
9. Mongoose saves to MongoDB
10. MongoDB returns created document
11. Controller sends success response
12. Frontend receives response
13. TaskService updates local state
14. Component displays new task

---

## Notes
- Architecture designed for scalability and maintainability
- Clear separation of concerns between layers
- Security-first approach with JWT and validation
- RESTful API design for predictable behavior
- Comprehensive error handling strategy
- Ready for future enhancements (pagination, search, etc.)

---
