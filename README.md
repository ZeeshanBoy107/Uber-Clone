# Backend for Uber Clone Application

This project is a backend application for an Uber-like service, providing user authentication, profile management, and database integration.

The backend is built using Node.js and Express.js, with MongoDB as the database. It implements user and captain registration, login, and logout functionalities, along with profile management. The application uses JSON Web Tokens (JWT) for authentication and includes features like token blacklisting for enhanced security.

Key features of this backend include:
- User and captain registration and authentication
- Secure password hashing using bcrypt
- JWT-based authentication with token blacklisting
- User and captain profile management
- MongoDB integration for data persistence
- CORS support for cross-origin requests
- Environment variable configuration for flexible deployment

## Repository Structure

```
backend/
├── app.js                 # Main application setup
├── server.js              # Server entry point
├── Controllers/
│   ├── user.controller.js # User-related controller functions
│   └── captain.controller.js # Captain-related controller functions
├── db/
│   └── db.js              # Database connection setup
├── middlewares/
│   └── auth.middleware.js # Authentication middleware
├── models/
│   ├── blackListToken.model.js # Model for blacklisted tokens
│   ├── user.model.js      # User model definition
│   └── captain.model.js   # Captain model definition
├── routes/
│   ├── user.routes.js     # User-related route definitions
│   └── captain.routes.js  # Captain-related route definitions
└── services/
    ├── user.service.js    # User-related business logic
    └── captain.service.js # Captain-related business logic
```

## Usage Instructions

### Installation

Prerequisites:
- Node.js (v14 or later)
- MongoDB (v4.4 or later)

Steps:
1. Clone the repository
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=4000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   ```
5. Start the server: `npm run dev`

### Getting Started

Once the server is running, you can interact with the API using HTTP requests. Here are some example endpoints:

1. Register a new user:
   ```
   POST /users/register
   Content-Type: application/json

   {
     "fullname": {
       "firstname": "John",
       "lastname": "Doe"
     },
     "email": "john@example.com",
     "password": "securepassword123"
   }
   ```

2. Login:
   ```
   POST /users/login
   Content-Type: application/json

   {
     "email": "john@example.com",
     "password": "securepassword123"
   }
   ```

3. Get user profile (requires authentication):
   ```
   GET /users/profile
   Cookie: token: your_jwt_token or
   Authorization: Bearer your_jwt_token 
   ```

4. Logout (requires authentication):
   ```
   POST /users/logout
   Cookie: token: your_jwt_token or
   Authorization: Bearer your_jwt_token
   ```

## API Endpoints

Here's a detailed description of all user-related endpoints for frontend engineers:

### User Endpoints

1. User Registration
- **Method**: POST
- **URL**: `/users/register`
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "message": "User created successfully",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com"
      }
    }
    ```

2. User Login
- **Method**: POST
- **URL**: `/users/login`
- **Description**: Authenticate a user and receive a JWT token
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com"
      },
      "message": "User logged in successfully"
    }
  ```
  - Cookies: Sets a httpOnly cookie named "token" containing the JWT

3. User Profile
- **Method**: GET
- **URL**: `/users/profile`
- **Description**: Retrieve the authenticated user's profile
- **Headers**: 
  - Authorization: Bearer your_jwt_token
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com"
      }
    }
    ```

4. User Logout
- **Method**: POST
- **URL**: `/users/logout`
- **Description**: Log out the authenticated user and invalidate the JWT token
- **Headers**: 
  - Authorization: Bearer your_jwt_token
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "User logged out successfully"
    }
    ```
  - Cookies: Clears the "token" cookie

### Captain Endpoints

1. Captain Registration
- **Method**: POST
- **URL**: `/captains/register`
- **Description**: Register a new captain
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "securepassword123",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Sedan"
    }
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body:
    ```json
    {
      "message": "Captain registered successfully",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
          "color": "Blue",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "Sedan"
        }
      }
    }
    ```

2. Captain Login
- **Method**: POST
- **URL**: `/captains/login`
- **Description**: Authenticate a captain and receive a JWT token
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
          "color": "Blue",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "Sedan"
        }
      },
      "message": "User Logged Successfully"
    }
    ```
  - Cookies: Sets a httpOnly cookie named "token" containing the JWT

3. Captain Profile
- **Method**: GET
- **URL**: `/captains/profile`
- **Description**: Retrieve the authenticated captain's profile
- **Headers**: 
  - Authorization: Bearer your_jwt_token
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
          "color": "Blue",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "Sedan"
        }
      }
    }
    ```

4. Captain Logout
- **Method**: POST
- **URL**: `/captains/logout`
- **Description**: Log out the authenticated captain and invalidate the JWT token
- **Headers**: 
  - Authorization: Bearer your_jwt_token
- **Response**:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Captain logged out successfully"
    }
    ```
  - Cookies: Clears the "token" cookie

Note: All endpoints that require authentication will return a 401 Unauthorized status if the token is missing, invalid, or blacklisted.

## Configuration Options

The application uses environment variables for configuration. These can be set in the `.env` file:

- `PORT`: The port on which the server will run (default: 4000)
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET_KEY`: Secret key for JWT token generation and verification

### Testing & Quality

To run tests (if implemented):
```
npm test
```

### Troubleshooting

1. Connection to MongoDB fails
   - Error message: "MongoDB Connection Error"
   - Diagnostic steps:
     1. Check if MongoDB is running: `sudo systemctl status mongodb`
     2. Verify the `MONGO_URL` in your `.env` file
     3. Ensure network connectivity to the MongoDB server
   - Solution: Correct the MongoDB connection string or start the MongoDB service

2. JWT verification fails
   - Error message: "Token is not valid"
   - Diagnostic steps:
     1. Check if the token is present in the request headers or cookies
     2. Verify that the token hasn't expired
     3. Ensure the `JWT_SECRET_KEY` in the `.env` file matches the one used to generate the token
   - Solution: Provide a valid token or update the JWT secret key

### Debugging

To enable debug mode, set the `DEBUG` environment variable:

```
DEBUG=app:* npm run dev
```

This will output detailed logs to the console. Log files are typically stored in the `logs/` directory (create this directory if it doesn't exist).

## Data Flow

The request data flow in this application follows these steps:

1. Client sends a request to a specific endpoint (e.g., /users/login or /captains/login)
2. The request is first processed by any global middleware (CORS, body parsing)
3. It then reaches the appropriate route handler in user.routes.js or captain.routes.js
4. The route handler may apply input validation using express-validator
5. The request is then passed to the corresponding controller function in user.controller.js or captain.controller.js
6. The controller interacts with the user.service.js or captain.service.js for business logic and the User or Captain model for database operations
7. The response is then sent back to the client

For authenticated routes:
1. The auth.middleware.js intercepts the request before it reaches the controller
2. It verifies the JWT token and checks against the blacklist
3. If valid, it attaches the user or captain object to the request and allows it to proceed
4. If invalid, it sends back an unauthorized response

```
Client Request
     |
     v
CORS & Body Parsing
     |
     v
Route Handler (user.routes.js or captain.routes.js)
     |
     v
Input Validation
     |
     v
Authentication Middleware (for protected routes)
     |
     v
Controller (user.controller.js or captain.controller.js)
     |
     v
Service Layer (user.service.js or captain.service.js)
     |
     v
Database Interaction (User or Captain model)
     |
     v
Response to Client
```

Note: The authentication middleware checks for the presence of a valid JWT token in the request headers or cookies. It also verifies that the token is not blacklisted before allowing the request to proceed to the controller.