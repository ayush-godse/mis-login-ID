# MIS System (Chat App)

A full-stack web application for a Management Information System (MIS) with user authentication, built using React, Node.js, Express, and MongoDB Atlas.

## Features

- **User Registration**: Sign up with name, email, password, and role (Sales/Admin).
- **User Login**: Secure authentication with JWT tokens.
- **Dashboard**: Protected dashboard for logged-in users.
- **Role-based Access**: Basic role differentiation (Sales/Admin).
- **Responsive UI**: Bootstrap-styled frontend.
- **Cloud Database**: MongoDB Atlas for data storage.

## Tech Stack

- **Frontend**: React 18, React Router, Axios, Bootstrap
- **Backend**: Node.js, Express.js, JWT, bcryptjs
- **Database**: MongoDB Atlas (cloud)
- **Other**: dotenv for environment variables

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier)
- Git (for cloning)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies** (root workspace handles both frontend and backend):
   ```bash
   npm install
   ```

## Setup

### MongoDB Atlas Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and database user.
3. Whitelist your IP address (or allow 0.0.0.0/0 for development).
4. Get your connection string.

### Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.yourcluster.mongodb.net/mis-system?appName=Cluster0
```

Replace with your actual Atlas connection string.

## Running the Application

### Backend (API Server)
From the project root:
```bash
npm run dev
```
Starts the server on `http://localhost:5000`.

### Frontend (React App)
In a new terminal:
```bash
npm run start:web
```
Or from `frontend/` directory:
```bash
cd frontend
npm start
```
Starts the app on `http://localhost:3000`.

## Usage

1. **Register**: Go to `http://localhost:3000/register`, fill in details, and register.
2. **Login**: Use the registered email/password at `http://localhost:3000/login`.
3. **Dashboard**: After login, access the protected dashboard.
4. **Logout**: Click the logout button to clear the session.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

## Project Structure

```
.
├── backend/                 # Backend source (alternative structure)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── config/                  # Database config
├── controllers/             # Auth controllers
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Login, Register, Dashboard
│   │   └── App.js
│   └── package.json
├── models/                  # User model
├── routes/                  # Auth routes
├── server.js                # Main backend server
├── package.json             # Root dependencies
├── .env                     # Environment variables (not committed)
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature'`.
4. Push to branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the ISC License.

## Support

If you encounter issues:
- Check the console for errors.
- Ensure MongoDB Atlas is connected and IP is whitelisted.
- Verify `.env` has the correct `MONGO_URI`.

For questions, open an issue on GitHub.