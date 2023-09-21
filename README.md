# Evento
# Node.js, MongoDB, and Express Project

This is a basic Node.js project that demonstrates CRUD operations and basic authentication for two models: Users and Companies. It uses MongoDB as the database and Express.js as the web framework.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running.

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ahtishamhafeez-10p/evento.git
   cd evento
2. npm install

3. Create a .env in your project
   PORT=3001
   MONGODB_DATABASE_URL=mongodb://localhost/your-database-name #in this case its evento
   JWT_TOKEN_KEY=your-secret-key

### Run Server

Run npm start to run the server, it uses nodemon for reloading live updates from node file instead of running server again

### Features

User Management: CRUD operations for user accounts (Register, Login, Update, Delete).
Company Management: CRUD operations for company data.
Authentication: Basic JWT-based authentication for user routes.

### API ENDPOINTS
 ## Auth Route

 Once you register a user with register user there is an auth route to get user token to get used in each of the collection
  
  1.POST /api/users/auth autheticate user(requires email and password as body).

 ## User Routes:

  1. POST /api/users/register: Register a new user(requires no authentication).
  2. GET /api/users/:id: Get the user's profile (requires authentication).
  3. PUT /api/users/:id: Update the user's profile (requires authentication).
  4. GET /api/users/: Get all users from the system(requires authentication).
  5. DELETE /api/users/:id: Delete the user's account (requires authentication).

## Company Routes:

  1. GET /api/companies: Get a list of all companies(requires authentication).
  2. GET /api/companies/:id: Get a specific company by ID(requires authentication).
  3. POST /api/companies: Create a new company (requires authentication).
  4. PUT /api/companies/:id: Update a specific company by ID (requires authentication).
  5. DELETE /api/companies/:id: Delete a specific company by ID (requires authentication).
