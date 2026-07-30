import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Test Database Connection
app.get("/test-db", async (req, res) => {
  try {
    const connection = await pool.getConnection();

    res.json({
      success: true,
      message: "✅ MySQL Connected Successfully!",
    });

    connection.release();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
    });
  }
});

app.get("/", (req, res) => {
  res.send("🚀 TaskFlow Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});