# Models Directory

This directory contains Mongoose schema definitions and models.

## Files to be created:
- `User.js` - User model with authentication
- `Task.js` - Task model with user relationship

## Model Specifications

### User Model
- username (String, unique, required)
- email (String, unique, required)
- password (String, required, hashed)
- createdAt (Date, default: Date.now)

### Task Model
- title (String, required)
- description (String)
- completed (Boolean, default: false)
- priority (String, enum: ['low', 'medium', 'high'], default: 'medium')
- dueDate (Date, optional)
- userId (ObjectId, ref: 'User', required)
- createdAt (Date, default: Date.now)
- updatedAt (Date, default: Date.now)
