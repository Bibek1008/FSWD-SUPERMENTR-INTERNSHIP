# Assignment 08/04/2026 - Role Guard

Add admin/user roles and restrict certain routes.

## Run

```bash
npm install
npm start
```

## Endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/user` - authenticated user route
- `GET /api/admin` - admin-only route

## Roles

Use the `role` field when signing up, e.g. `admin` or `user`.
