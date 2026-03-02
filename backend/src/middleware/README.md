# Middleware Directory

This directory contains custom Express middleware functions.

## Files to be created:
- `authMiddleware.js` - JWT authentication verification
- `errorHandler.js` - Centralized error handling
- `validators.js` - Request validation middleware

## Middleware Functions

### authMiddleware.js
- `protect` - Verify JWT token and attach user to request

### errorHandler.js
- `errorHandler` - Global error handling middleware
- `notFound` - 404 handler

### validators.js
- `validateRegister` - Validate registration data
- `validateLogin` - Validate login credentials
- `validateTask` - Validate task data
