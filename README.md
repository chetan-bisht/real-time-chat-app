# Real-Time Chat Application

A full-stack, real-time chat application featuring instant messaging, online status tracking, and a highly customizable UI with 32 built-in themes.

**Live Demo**
[View Live Application](#)

*Note: The app is hosted on Render's free tier. If the app hasn't been accessed recently, the first load may take 30-50 seconds as the server wakes up.*

## Features

- **Real-Time Messaging**: Instant communication powered by Socket.io.
- **Online Status**: Real-time tracking of which users are currently online.
- **Profile Management**: Customizable user profiles with image upload support via Cloudinary.
- **32 Customizable Themes**: Switch between dozens of DaisyUI themes (Retro, Cyberpunk, Valentine, etc.).
- **Authentication**: Secure Signup/Login using JWT and Bcrypt.js.
- **Responsive UI**: Modern, mobile-first design built with Tailwind CSS.

## Tech Stack

### Frontend
- **React 19**
- **Vite**
- **Tailwind CSS & DaisyUI**
- **Zustand** (State Management)
- **React Router**
- **Axios**

### Backend
- **Node.js**
- **Express.js (v5)**
- **MongoDB & Mongoose**
- **Socket.io** (Real-time communication)
- **Cloudinary** (Image hosting)
- **JWT** (Authentication)

## Getting Started

### Prerequisites
- **Node.js (v18+)**
- **MongoDB database** (MongoDB Atlas recommended)
- **Cloudinary Account** (For profile picture uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   PORT=3000
   NODE_ENV=development
   ```

4. **Seed the database (Optional)**
   ```bash
   node src/seeds/user.seed.js
   ```

5. **Start the backend server**
   ```bash
   npm run dev
   ```

6. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## Project Structure

```
chat-app/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── store/          # Zustand state stores
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Axios and utility config
│   │   └── App.jsx         # Main entry with routing
│   └── ...
├── backend/                # Express backend
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   ├── lib/            # DB, Socket, and Cloudinary config
│   │   └── index.js        # Server entry point
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `PUT /api/auth/update-profile` - Update profile picture
- `GET /api/auth/check-auth` - Validate current session

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get chat history with a user
- `POST /api/messages/send/:id` - Send a new message

## Deployment

### Deploy to Render
1. **Set up MongoDB Atlas** and get your connection string.
2. **Set up Cloudinary** and get your API credentials.
3. **Deploy the Backend**:
   - Create a new **Web Service** on Render.
   - Connect your repo and set the root directory to `backend`.
   - Add all environment variables from your `.env` file.
4. **Deploy the Frontend**:
   - Create a new **Static Site** on Render.
   - Set the root directory to `frontend`.
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Set the `VITE_BACKEND_URL` environment variable to your backend's Render URL.

## License
This project is licensed under the MIT License.
