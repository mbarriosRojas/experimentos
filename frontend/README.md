# Mi App de Tareas - Frontend

Angular-based frontend application for task management.

## Tech Stack

- **Framework**: Angular (latest stable version)
- **UI Components**: Angular Material (to be installed)
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Forms**: Reactive Forms

## Project Structure

This directory will contain the Angular application initialized by the frontend subagent.

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/           # Singleton services, guards, interceptors
│   │   ├── shared/         # Shared components, directives, pipes
│   │   ├── features/       # Feature modules
│   │   │   ├── auth/       # Authentication module
│   │   │   └── tasks/      # Task management module
│   │   ├── models/         # TypeScript interfaces and types
│   │   └── app.component.ts
│   ├── assets/             # Static assets
│   └── environments/       # Environment configurations
└── angular.json            # Angular CLI configuration
```

## Setup Instructions

The Angular application will be initialized by the frontend subagent using:
```bash
ng new frontend --routing --style=scss
```

## Features to Implement

- User authentication (login/register)
- Task CRUD operations
- Task filtering and sorting
- Responsive design
- Form validation
- Error handling
