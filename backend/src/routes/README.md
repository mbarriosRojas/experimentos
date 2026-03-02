# Routes Directory

This directory contains API route definitions.

## Files to be created:
- `authRoutes.js` - Authentication routes
- `taskRoutes.js` - Task management routes

## Route Definitions

### authRoutes.js
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### taskRoutes.js (all require authentication)
- `GET /api/v1/tasks` - Get all tasks for user
- `GET /api/v1/tasks/:id` - Get specific task
- `POST /api/v1/tasks` - Create new task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task
