# Quick Start Guide - Mi App de Tareas

## For Developers Joining This Project

This guide helps you quickly understand and start working on the project.

## 📋 What is This Project?

A full-stack task management application where users can:
- Register and login securely
- Create, view, update, and delete tasks
- Set task priorities and due dates
- Mark tasks as complete/incomplete

## 🛠 Tech Stack

**Frontend**: Angular + Angular Material  
**Backend**: Node.js + Express  
**Database**: MongoDB + Mongoose  
**Auth**: JWT (JSON Web Tokens)

## 📁 Project Structure

```
/workspace/
├── backend/        → Express API server
├── frontend/       → Angular application
└── .cursor/        → Project documentation (you are here!)
```

## 🚀 Getting Started

### Prerequisites
1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. **Angular CLI** - `npm install -g @angular/cli`

### Setup Steps

#### 1. Backend Setup
```bash
cd backend

# Create environment file
cp .env.example .env

# Edit .env with your MongoDB connection string
# nano .env  (or use your preferred editor)

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend should now be running on `http://localhost:3000`

#### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
ng serve
```

Frontend should now be running on `http://localhost:4200`

### 3. Test the Application
1. Open browser to `http://localhost:4200`
2. Register a new user
3. Login with your credentials
4. Create, edit, and manage tasks!

## 📚 Key Documentation Files

| File | Purpose |
|------|---------|
| `/workspace/README.md` | Project overview and features |
| `/workspace/.cursor/scratchpad.md` | Complete architecture & API specs |
| `/workspace/.cursor/ROADMAP.md` | Development phases and timeline |
| `/workspace/.cursor/STRUCTURE.md` | Detailed file structure |
| `/workspace/.cursor/QUICKSTART.md` | This file - quick setup guide |

## 🔑 Environment Variables

Create `/workspace/backend/.env` with:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/mi-app-tareas
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:4200
```

**Important**: Never commit `.env` file to git!

## 🧪 Running Tests

### Backend Tests
```bash
cd backend
npm test              # Run all tests
npm run test:watch    # Watch mode
```

### Frontend Tests
```bash
cd frontend
ng test               # Run unit tests
ng e2e                # Run e2e tests (if configured)
```

## 📡 API Endpoints

### Authentication (Public)
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### Tasks (Requires JWT Token)
- `GET /api/v1/tasks` - Get all user's tasks
- `GET /api/v1/tasks/:id` - Get specific task
- `POST /api/v1/tasks` - Create new task
- `PUT /api/v1/tasks/:id` - Update task
- `DELETE /api/v1/tasks/:id` - Delete task

**Note**: All task endpoints require `Authorization: Bearer <token>` header

See `/workspace/.cursor/scratchpad.md` for detailed API specifications.

## 🏗 Development Workflow

### Current Status
Check `/workspace/.cursor/scratchpad.md` for current phase status.

### Making Changes

1. **Read the docs** - Understand architecture in `scratchpad.md`
2. **Create feature branch** (if using git flow)
3. **Make changes** in appropriate layer (backend/frontend)
4. **Test your changes** locally
5. **Update documentation** if needed
6. **Commit and push** changes

### Code Organization

#### Backend
- **Models** (`/backend/src/models/`) - Database schemas
- **Controllers** (`/backend/src/controllers/`) - Business logic
- **Routes** (`/backend/src/routes/`) - API endpoints
- **Middleware** (`/backend/src/middleware/`) - Auth, validation, errors

#### Frontend
- **Core** (`/frontend/src/app/core/`) - Services, guards, interceptors
- **Features** (`/frontend/src/app/features/`) - Auth & Tasks modules
- **Shared** (`/frontend/src/app/shared/`) - Reusable components
- **Models** (`/frontend/src/app/models/`) - TypeScript interfaces

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB is running: `mongod --version`
- Verify `.env` file exists in `/workspace/backend/`
- Check port 3000 is not in use: `lsof -i :3000`

### Frontend won't start
- Verify Angular CLI is installed: `ng version`
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### CORS errors
- Verify backend `FRONTEND_URL` in `.env` matches frontend URL
- Check CORS middleware configuration in backend

### Authentication not working
- Verify JWT_SECRET is set in backend `.env`
- Check browser console for errors
- Verify token is being sent in Authorization header

## 📞 Getting Help

1. **Check documentation** in `/workspace/.cursor/`
2. **Review scratchpad.md** for architecture details
3. **Check ROADMAP.md** for project phases
4. **Review STRUCTURE.md** for file organization

## 🎯 What to Work On?

Check `/workspace/.cursor/ROADMAP.md` for:
- Current phase status
- Pending tasks
- Future enhancements

## 🔐 Security Notes

- **Never commit** `.env` files
- **Never commit** secrets or API keys
- **Always hash** passwords (bcryptjs handles this)
- **Always validate** user input (backend & frontend)
- **Always use** HTTPS in production

## 🚢 Deployment (Future)

When ready to deploy:
1. Set up production MongoDB (MongoDB Atlas recommended)
2. Configure production environment variables
3. Build frontend: `ng build --prod`
4. Set up reverse proxy (Nginx)
5. Use process manager (PM2)
6. Enable HTTPS (Let's Encrypt)
7. Set up CI/CD pipeline

See future deployment guide for detailed instructions.

---

## Next Steps for New Developers

1. ✅ Read this QUICKSTART.md
2. ✅ Read `/workspace/README.md`
3. ✅ Review `/workspace/.cursor/scratchpad.md` (architecture)
4. ✅ Set up backend and frontend
5. ✅ Test the application locally
6. ✅ Check ROADMAP.md for current tasks
7. ✅ Start contributing!

---

**Happy Coding! 🎉**

*Last Updated: 2026-03-02 by Architect subagent*
