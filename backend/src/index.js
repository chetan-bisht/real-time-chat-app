import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "../routes/auth.route.js";
import { connectDB } from "../lib/db.js";

// Dotenv configuration
dotenv.config();

//Initialize app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares and routes
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Express server is running." });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();

