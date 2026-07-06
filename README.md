# 🚀 Subscription Tracker

[![Node version](https://img.shields.io/badge/node-%3E%3D%2018-blue)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

An elegant, lightweight API to track subscriptions and manage users — built with Express, Zod validation, and minimal dependencies. Designed for clarity, speed, and easy extension.

---

## ✨ Highlights

- Clean routing structure and middleware-based validation
- Zod-powered schemas for reliable input validation
- Simple in-memory user store for prototyping
- Ready-to-extend authentication flow with bcrypt + JWT

---

## 🚦 Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the server (development):

```bash
npm run dev
```

3. Start the server (production):

```bash
npm start
```

The server will run on `http://localhost:4545` by default (or `PORT` env).

---

## 🧭 Available Routes

- `GET /` — API home
- `GET /error` — Test error route (returns structured error)
- `POST /auth/register` — Register new user (validated by Zod)
- `POST /auth/login` — Login (stubbed service — extend to use JWT)

Example: trigger validation error

```bash
curl -i -X POST http://localhost:4545/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"ab","email":"invalid","password":"123"}'
```

---

## 🛠️ Project Structure (short)

- `src/app.js` — Express app configuration and global middleware
- `src/server.js` — App entrypoint
- `src/routes/` — Route definitions (`index.js`, `auth.routes.js`, ...)
- `src/middlewares/` — Error handler and validation middleware
- `src/validations/` — Zod schemas
- `src/services/` — Business logic (auth, home)
- `tests/` — Node test runner checks

---

## ✅ Development Tips

- Use `nodemon` for hot reloads: `npm run dev`
- Add environment variables in a `.env` file (e.g., `PORT`, `JWT_SECRET`)
- To expand auth: compare passwords with `bcrypt.compare` and sign tokens with `jsonwebtoken`.

---

## Contributing

Contributions welcome — open an issue or submit a PR. Keep changes focused and add tests for new behavior.

---

Made with ❤️ — feel free to ask me to expand the README with diagrams, examples, or CI badges.# Subscription Tracker API

A lightweight Express-based API for tracking subscription users with JWT authentication and validation.

## Features

- Express server with security headers via `helmet`
- Request logging with `morgan`
- CORS enabled
- User registration and login
- Password hashing with `bcryptjs`
- JWT authentication for protected routes
- Input validation using `zod`
- Centralized error handling

## Requirements

- Node.js 18+ (or compatible)
- npm
- `.env` file with the following values:
  - `PORT` (optional)
  - `JWT_SECRET`
  - `JWT_EXPIRES_IN`

## Installation

```bash
npm install
```

## Environment

Create a `.env` file in the project root and add:

```env
PORT=4545
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=1d
```

## Running the App

Start the server:

```bash
npm start
```

For development with automatic reloads:

```bash
npm run dev
```

The API will be available at `http://localhost:4545` by default.

## API Endpoints

### Health / Home

- `GET /`
- Response:
  - `success`: `true`
  - `message`: API status
  - `version`: `1.0.0`

### Test

- `POST /test`
- Body: any JSON
- Response: echoes `success: true` and `data` body

### Authentication

#### Register

- `POST /auth/register`
- Body:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "password123"
  }
  ```
- Success response:
  - `success`: `true`
  - `message`: `User registered successfully.`
  - `user`: profile object without password

#### Login

- `POST /auth/login`
- Body:
  ```json
  {
    "email": "jane@example.com",
    "password": "password123"
  }
  ```
- Success response includes:
  - `token`
  - `user`

### Protected User Route

- `GET /users/profile`
- Header:
  - `Authorization: Bearer <token>`
- Success response includes authenticated user data

## Validation

- Registration validates:
  - `name` minimum 3 characters
  - valid `email`
  - `password` minimum 8 characters

## Project Structure

- `src/server.js` — application entry point
- `src/app.js` — Express app setup
- `src/routes/` — route definitions
- `src/controllers/` — request handlers
- `src/services/` — business logic
- `src/middlewares/` — middleware functions
- `src/utils/` — JWT helpers
- `src/models/` — in-memory user store
- `src/validations/` — Zod validation schemas

## Notes

- This project uses an in-memory array for user storage (`src/models/user.model.js`).
- For production, replace the user store with a database and add proper security hardening.

## License

ISC
