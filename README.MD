# Physiotherapy Exercises App (Backend)

This repository contains the backend server for the **Physiotherapy Exercises** application. The app provides an API for storing and retrieving physiotherapy exercises and user-related information. The backend is built with **Node.js**, **Apollo Server**, **GraphQL**, **PostgreSQL**, **Sequelize**, **TypeScript**, and **JWT** for secure user authentication. Docker is used for containerization of the app and the PostgreSQL database.

## Features

- **GraphQL API**: Flexible and efficient way to query and manipulate physiotherapy exercises and user data.
- **JWT Authentication**: Secure user authentication and session management.
- **Sequelize ORM**: Easy database management using Sequelize with PostgreSQL.
- **Node.js with TypeScript**: Modern, scalable backend powered by TypeScript for type safety.
- **Docker**: Containerized PostgreSQL and backend for easy development and deployment.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend server.
- **Apollo Server**: Provides GraphQL API for the app.
- **GraphQL**: Query language for the API.
- **Sequelize ORM**: Manages PostgreSQL database models and migrations.
- **PostgreSQL**: Relational database for storing user and exercise data.
- **TypeScript**: Superset of JavaScript that provides type safety.
- **JWT (JSON Web Tokens)**: Secure user authentication.
- **Docker**: Containerized backend and PostgreSQL database.

## Folder Structure

The project follows a modular folder structure for scalability and maintainability:

```bash
my-physiotherapy-app/
├── src/
│   ├── config/
│   │   ├── database.ts       # Sequelize DB connection
│   │   ├── jwt.ts            # JWT utility functions (sign, verify)
│   │   └── types.ts          # Common types (e.g., user, context)
│   ├── models/
│   │   ├── User.ts           # Sequelize model for User
│   │   ├── Exercise.ts       # Sequelize model for Exercise (e.g., physiotherapy exercises)
│   │   └── index.ts          # Export all models from a single file
│   ├── resolvers/
│   │   ├── userResolvers.ts  # GraphQL resolvers for user-related actions (login, registration)
│   │   ├── exerciseResolvers.ts  # GraphQL resolvers for exercise-related queries and mutations
│   │   └── index.ts          # Export all resolvers from a single file
│   ├── schema/
│   │   ├── userSchema.ts     # User-related GraphQL schema
│   │   ├── exerciseSchema.ts # Exercise-related GraphQL schema
│   │   └── index.ts          # Combine all schemas
│   ├── services/
│   │   ├── authService.ts    # Authentication-related logic (e.g., login)
│   │   ├── exerciseService.ts # Service for handling exercise-related logic
│   │   └── index.ts          # Export all services
│   ├── middlewares/
│   │   └── authMiddleware.ts # Middleware to validate JWT
│   ├── app.ts                # Apollo Server setup (Express + Apollo Server)
│   └── server.ts             # Entry point for the server
├── .env                      # Environment variables (DB credentials, JWT secrets, etc.)
├── .gitignore                # Files to be ignored by Git
├── docker-compose.yml        # Docker Compose configuration for DB and backend services
├── Dockerfile                # Dockerfile for backend server
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```
