# Project Structure - Mi App de Tareas

## Complete File Tree

```
mi-app-de-tareas/
│
├── .cursor/                                    # Project documentation
│   ├── scratchpad.md                          # Main documentation & architecture
│   ├── ROADMAP.md                             # Development roadmap
│   └── STRUCTURE.md                           # This file - project structure
│
├── .git/                                       # Git repository
│   └── ...
│
├── backend/                                    # Node.js/Express API
│   │
│   ├── src/                                   # Source code
│   │   │
│   │   ├── config/                            # Configuration files
│   │   │   ├── database.js                    # MongoDB connection [TO BE CREATED]
│   │   │   ├── env.js                         # Environment variables [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   ├── controllers/                       # Business logic
│   │   │   ├── authController.js              # Auth: register, login [TO BE CREATED]
│   │   │   ├── taskController.js              # Tasks: CRUD operations [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   ├── middleware/                        # Custom middleware
│   │   │   ├── authMiddleware.js              # JWT verification [TO BE CREATED]
│   │   │   ├── errorHandler.js                # Error handling [TO BE CREATED]
│   │   │   ├── validators.js                  # Input validation [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   ├── models/                            # Mongoose schemas
│   │   │   ├── User.js                        # User model [TO BE CREATED]
│   │   │   ├── Task.js                        # Task model [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   ├── routes/                            # API routes
│   │   │   ├── authRoutes.js                  # /api/v1/auth/* [TO BE CREATED]
│   │   │   ├── taskRoutes.js                  # /api/v1/tasks/* [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   ├── utils/                             # Utility functions
│   │   │   ├── generateToken.js               # JWT generation [TO BE CREATED]
│   │   │   ├── asyncHandler.js                # Async error wrapper [TO BE CREATED]
│   │   │   └── README.md                      # ✅ Created
│   │   │
│   │   └── server.js                          # Application entry point [TO BE CREATED]
│   │
│   ├── tests/                                 # Test files
│   │   ├── auth.test.js                       # Auth tests [TO BE CREATED]
│   │   ├── task.test.js                       # Task tests [TO BE CREATED]
│   │   ├── models.test.js                     # Model tests [TO BE CREATED]
│   │   ├── setup.js                           # Test setup [TO BE CREATED]
│   │   └── README.md                          # ✅ Created
│   │
│   ├── .env                                   # Environment variables [TO BE CREATED - not in git]
│   ├── .env.example                           # ✅ Created - Environment template
│   ├── package.json                           # ✅ Created - Dependencies
│   └── README.md                              # ✅ Created - Backend docs
│
├── frontend/                                  # Angular application
│   │
│   ├── src/                                   # [TO BE CREATED BY FRONTEND SUBAGENT]
│   │   │
│   │   ├── app/
│   │   │   │
│   │   │   ├── core/                          # Singleton services
│   │   │   │   ├── services/
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   └── task.service.ts
│   │   │   │   ├── guards/
│   │   │   │   │   └── auth.guard.ts
│   │   │   │   ├── interceptors/
│   │   │   │   │   ├── jwt.interceptor.ts
│   │   │   │   │   └── error.interceptor.ts
│   │   │   │   └── core.module.ts
│   │   │   │
│   │   │   ├── shared/                        # Shared components
│   │   │   │   ├── components/
│   │   │   │   │   ├── header/
│   │   │   │   │   ├── loading/
│   │   │   │   │   └── error/
│   │   │   │   └── shared.module.ts
│   │   │   │
│   │   │   ├── features/                      # Feature modules
│   │   │   │   │
│   │   │   │   ├── auth/                      # Authentication
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── login/
│   │   │   │   │   │   │   ├── login.component.ts
│   │   │   │   │   │   │   ├── login.component.html
│   │   │   │   │   │   │   └── login.component.scss
│   │   │   │   │   │   └── register/
│   │   │   │   │   │       ├── register.component.ts
│   │   │   │   │   │       ├── register.component.html
│   │   │   │   │   │       └── register.component.scss
│   │   │   │   │   ├── auth-routing.module.ts
│   │   │   │   │   └── auth.module.ts
│   │   │   │   │
│   │   │   │   └── tasks/                     # Task management
│   │   │   │       ├── components/
│   │   │   │       │   ├── task-list/
│   │   │   │       │   │   ├── task-list.component.ts
│   │   │   │       │   │   ├── task-list.component.html
│   │   │   │       │   │   └── task-list.component.scss
│   │   │   │       │   ├── task-form/
│   │   │   │       │   │   ├── task-form.component.ts
│   │   │   │       │   │   ├── task-form.component.html
│   │   │   │       │   │   └── task-form.component.scss
│   │   │   │       │   └── task-item/
│   │   │   │       │       ├── task-item.component.ts
│   │   │   │       │       ├── task-item.component.html
│   │   │   │       │       └── task-item.component.scss
│   │   │   │       ├── tasks-routing.module.ts
│   │   │   │       └── tasks.module.ts
│   │   │   │
│   │   │   ├── models/                        # TypeScript interfaces
│   │   │   │   ├── user.interface.ts
│   │   │   │   ├── task.interface.ts
│   │   │   │   └── api-response.interface.ts
│   │   │   │
│   │   │   ├── app-routing.module.ts          # Main routing
│   │   │   ├── app.component.ts               # Root component
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   └── app.module.ts                  # Root module
│   │   │
│   │   ├── assets/                            # Static assets
│   │   │   ├── images/
│   │   │   └── styles/
│   │   │
│   │   ├── environments/                      # Environment configs
│   │   │   ├── environment.ts                 # Development
│   │   │   └── environment.prod.ts            # Production
│   │   │
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   │
│   ├── angular.json                           # Angular configuration
│   ├── package.json                           # Frontend dependencies
│   ├── tsconfig.json                          # TypeScript config
│   └── README.md                              # ✅ Created - Frontend docs
│
├── .gitignore                                 # ✅ Created - Git ignore rules
└── README.md                                  # ✅ Created - Project overview
```

## File Status Legend

- ✅ **Created**: File has been created by architect subagent
- 🔄 **To Be Created**: File will be created by designated subagent
- 📁 **Directory**: Folder structure created

## Creation Responsibility

### Created by ARCHITECT ✅
- All README.md files in backend directories
- backend/package.json
- backend/.env.example
- frontend/README.md (placeholder)
- .gitignore
- Main README.md
- All documentation in .cursor/

### To Be Created by DATABASE Subagent
- backend/src/config/database.js
- backend/src/models/User.js
- backend/src/models/Task.js

### To Be Created by BACKEND Subagent
- backend/src/config/env.js
- backend/src/controllers/authController.js
- backend/src/controllers/taskController.js
- backend/src/middleware/authMiddleware.js
- backend/src/middleware/errorHandler.js
- backend/src/middleware/validators.js
- backend/src/routes/authRoutes.js
- backend/src/routes/taskRoutes.js
- backend/src/utils/generateToken.js
- backend/src/utils/asyncHandler.js
- backend/src/server.js
- backend/tests/*.test.js
- backend/.env

### To Be Created by FRONTEND Subagent
- Entire Angular application structure
- All components, services, guards, interceptors
- Routing configuration
- Styling and themes

## Directory Purposes

### Backend Directories

#### `/backend/src/config/`
Configuration and setup files for the application (database, environment).

#### `/backend/src/controllers/`
Business logic separated from routes. Each controller handles specific domain operations.

#### `/backend/src/middleware/`
Express middleware functions for cross-cutting concerns (auth, validation, errors).

#### `/backend/src/models/`
Mongoose schema definitions and model methods.

#### `/backend/src/routes/`
API endpoint definitions. Routes delegate to controllers.

#### `/backend/src/utils/`
Reusable utility functions used across the application.

#### `/backend/tests/`
Test files for unit and integration testing.

### Frontend Directories

#### `/frontend/src/app/core/`
Singleton services, guards, and interceptors used throughout the app.

#### `/frontend/src/app/shared/`
Reusable components, directives, and pipes shared across features.

#### `/frontend/src/app/features/`
Feature modules organized by business domain (auth, tasks).

#### `/frontend/src/app/models/`
TypeScript interfaces and types for type safety.

#### `/frontend/src/environments/`
Environment-specific configuration (API URLs, feature flags).

## Key Files Explained

### Backend

**server.js**  
Entry point for the Express application. Configures middleware, mounts routes, starts server.

**database.js**  
Handles MongoDB connection using Mongoose. Exports connection function.

**User.js / Task.js**  
Mongoose models defining schemas, methods, and hooks for database operations.

**authController.js / taskController.js**  
Controller functions containing business logic for authentication and task operations.

**authMiddleware.js**  
Middleware to protect routes by verifying JWT tokens.

**validators.js**  
Input validation middleware using express-validator.

**errorHandler.js**  
Centralized error handling middleware for consistent error responses.

### Frontend

**app.module.ts**  
Root module that bootstraps the Angular application.

**app-routing.module.ts**  
Main routing configuration with lazy-loaded feature modules.

**auth.service.ts**  
Handles authentication logic (login, register, token management).

**task.service.ts**  
Handles task CRUD operations via HTTP requests to backend.

**auth.guard.ts**  
Route guard to protect routes that require authentication.

**jwt.interceptor.ts**  
HTTP interceptor to automatically add JWT token to outgoing requests.

**error.interceptor.ts**  
HTTP interceptor to handle API errors globally.

## Import Paths

### Backend (CommonJS)
```javascript
// Example imports
const express = require('express');
const User = require('./models/User');
const { protect } = require('./middleware/authMiddleware');
const taskController = require('./controllers/taskController');
```

### Frontend (ES6 Modules)
```typescript
// Example imports
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Task } from '@app/models/task.interface';
```

## Notes

- Backend uses CommonJS module system (Node.js default)
- Frontend uses ES6 modules (TypeScript/Angular standard)
- All configuration is environment-based (no hardcoded values)
- Clear separation between features for maintainability
- Test files mirror source structure for easy navigation

---

**Last Updated**: 2026-03-02 by Architect subagent
