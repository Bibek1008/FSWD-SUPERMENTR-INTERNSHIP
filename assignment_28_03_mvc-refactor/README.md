# Assignment 28/03/2026 - MVC Refactor

Refactor the task API into an MVC structure.

## Run

```bash
npm install
npm start
```

## Structure

- `server.js` - app entry point
- `routes/taskRoutes.js` - router definitions
- `controllers/taskController.js` - request handlers
- `models/taskModel.js` - in-memory data model

## Endpoints

- `GET /api/tasks`
- `GET /api/tasks/:id`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`
