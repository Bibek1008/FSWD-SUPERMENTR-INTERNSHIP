# Assignment 30/03/2026 - Data Modeler

Design a MongoDB schema for a blogging platform.

## Models

- `User`
  - `name`, `email`, `passwordHash`, `role`, `bio`
- `Post`
  - `title`, `body`, `author`, `tags`, `published`, `comments`
- `Comment`
  - `author`, `content`, `createdAt`

## Notes

This assignment defines the main entities needed for a blog backend and shows how to relate posts to users using MongoDB and Mongoose.
