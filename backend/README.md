# Mi App de Tareas - Backend API

RESTful API for task management application built with Node.js, Express, and MongoDB.

## Tech Stack

- **Runtime**: Node.js (>=18.0.0)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, bcryptjs
- **Validation**: express-validator

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files (database, env)
│   ├── controllers/    # Route controllers (business logic)
│   ├── middleware/     # Custom middleware (auth, validation, error handling)
│   ├── models/         # Mongoose models (User, Task)
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── server.js       # Application entry point
├── tests/              # Test files
├── .env.example        # Environment variables template
└── package.json        # Dependencies and scripts
```

## Setup Instructions

1. Copy `.env.example` to `.env` and configure your environment variables
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Run tests: `npm test`

## API Documentation

See `/workspace/.cursor/scratchpad.md` for complete API endpoint specifications.

## Environment Variables

- `PORT`: Server port (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `JWT_EXPIRE`: JWT token expiration time
- `FRONTEND_URL`: Frontend URL for CORS configuration
