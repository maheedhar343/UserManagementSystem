# User Management System

A simple user management system with Create, Read, Update, and Delete (CRUD) operations. Built using React for the front end, Express for the backend, and MongoDB for the database.

## Features

- **ADD User**: Authenticate users and provide access to their profiles.
- **User List**: View a list of all registered users.
- **Edit User**: Update user details (e.g., change password).
- **Delete User**: Remove a user from the system.

## Installation

1. Clone this repository:
   ```
   github.com/maheedhar343/UserManagementSystem
   ```

2. Install dependencies for both the frontend and backend:
   ```
   cd user-management-system
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up your MongoDB connection in `backend/config/db.js`.

4. Start the development server:
   ```
   cd backend
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate user login.
- `GET /api/users/profile`: Get user profile.
- `GET /api/users`: Get a list of all users.
- `PUT /api/users/:id`: Update user details.
- `DELETE /api/users/:id`: Delete a user.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Feel free to customize this template with additional information specific to your project. Good luck with your user management system! 😊🚀
