# Mi App de Tareas

A full-stack task management application built with Angular, Node.js/Express, and MongoDB.

## Features

- User authentication (register/login with JWT)
- Create, read, update, and delete tasks
- Task priority levels (low, medium, high)
- Task completion status
- Due dates for tasks
- Secure API with authentication middleware

## Tech Stack

### Frontend
- **Framework**: Angular (latest stable)
- **UI**: Angular Material
- **HTTP**: Angular HttpClient
- **State Management**: Services with RxJS

### Backend
- **Runtime**: Node.js (>=18.0.0)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Security**: Helmet, CORS, bcryptjs

## Project Structure

```
mi-app-de-tareas/
├── backend/           # Node.js/Express API
│   ├── src/
│   │   ├── config/    # Configuration files
│   │   ├── controllers/  # Business logic
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/    # Mongoose models
│   │   ├── routes/    # API routes
│   │   ├── utils/     # Utility functions
│   │   └── server.js  # Entry point
│   └── tests/         # Backend tests
├── frontend/          # Angular application
└── .cursor/           # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (>=18.0.0)
- MongoDB (running locally or remote instance)
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
ng serve
```

The backend will run on `http://localhost:3000` and the frontend on `http://localhost:4200`.

## API Documentation

See `.cursor/scratchpad.md` for detailed API specifications.

## Development Process

This project is being built using a multi-agent approach:
1. **Architect** - Design architecture and folder structure
2. **Database** - Set up MongoDB models and connections
3. **Backend** - Implement API endpoints and business logic
4. **Frontend** - Build Angular application
5. **Integrator** - Connect all components
6. **Verifier** - Test and validate functionality

## License

ISC
