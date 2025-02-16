import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

// Initialize express application
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // parse incoming JSON data in requests

// Test route
app.get("/", (req, res) => {
  res.send("Fitness App Backend is running.");
});

// test database connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW();");
    res.json({ message: "Database connected!", time: result.rows[0].now });
  } catch (error) {
    console.error("Database connection error:", error);
    next(error);
  }
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(" Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
