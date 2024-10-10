# User Management System

This project is a User Management System built with React.js for the frontend and Node.js with Express.js for the backend. It allows users to register, log in, and manage their information with CRUD operations (Create, Read, Update, Delete).

## Project Description

The project consists of three main pages:

1. **Login Page**: 
   - Users can log in by entering their registered email and password.
   - The login functionality is implemented using JWT (JSON Web Tokens) for secure authentication.
   - Upon successful login, users are redirected to the Home page.

2. **Registration Page**: 
   - New users can create an account by providing their name, email, password, age, phone number, and address.
   - The registration process includes validation to check if the user already exists in the database.
   - Passwords are securely hashed using bcrypt before storing them in the database.

3. **Home Page**: 
   - Displays a list of all registered users, fetched from the backend using Axios for API calls.
   - Each user entry includes options to **Edit** or **Delete** their information.
   - Editing functionality allows users to update their details in a modal form, and the changes are reflected in the database.
   - Deleting a user removes their entry from the database and updates the displayed list.

### Database

- The application uses **MongoDB** as the database to store user information. MongoDB's document-oriented structure allows for easy management of user data, including additional fields like age, phone number, and address.
- The connection to the MongoDB database is established using Mongoose, which simplifies data modeling and validation.

### Features

- User registration and login functionality with JWT-based authentication.
- CRUD operations for user management, allowing users to create, read, update, and delete their profiles.
- State management using **Redux Toolkit** for efficient handling of application state.
- API calls using **Axios** to communicate with the backend.
- Responsive UI designed with **Tailwind CSS** for a modern look and feel.

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB database (either locally or using a service like MongoDB Atlas)
- Git installed for version control

### Clone the Repository

```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

### Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following variables:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the backend server:

   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Run the frontend application:

   ```bash
   npm start
   ```

### Usage

- Open your browser and go to `http://localhost:5173` to access the application.
- You can register a new user, log in with your credentials, and manage user information on the Home page.
