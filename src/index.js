import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
