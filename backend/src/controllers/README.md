# Controllers Directory

This directory contains controller functions that handle business logic for routes.

## Files to be created:
- `authController.js` - Authentication logic (register, login)
- `taskController.js` - Task CRUD operations

## Controller Functions

### authController.js
- `register(req, res)` - Register new user
- `login(req, res)` - Authenticate user and return JWT

### taskController.js
- `getTasks(req, res)` - Get all tasks for authenticated user
- `getTask(req, res)` - Get single task by ID
- `createTask(req, res)` - Create new task
- `updateTask(req, res)` - Update existing task
- `deleteTask(req, res)` - Delete task
