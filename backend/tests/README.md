# Tests Directory

This directory will contain test files for the backend API.

## Testing Strategy

### Test Framework
- **Jest**: JavaScript testing framework
- **Supertest**: HTTP assertion library for API testing

### Test Structure

#### Unit Tests
- Test individual functions and methods
- Mock external dependencies
- Files: `*.test.js` or `*.spec.js`

#### Integration Tests
- Test API endpoints end-to-end
- Use test database (separate from development)
- Test authentication flow
- Test CRUD operations

### Files to be created:
- `auth.test.js` - Authentication endpoint tests
- `task.test.js` - Task CRUD endpoint tests
- `models.test.js` - Model validation tests
- `setup.js` - Test configuration and database setup

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage Goals
- Controllers: 80%+
- Models: 90%+
- Middleware: 80%+
- Routes: 100%

### Test Database
- Use separate MongoDB database for testing
- Configured via `MONGODB_URI_TEST` environment variable
- Clear database before each test suite
- Seed with test data as needed
