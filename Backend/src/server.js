const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();

// Initialize Database connection
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger for dev
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use("/api", apiRoutes);

// Root greeting
app.get("/", (req, res) => {
  res.json({
    name: "TechNexus Systems API",
    status: "online",
    docs: "/api/health",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("[API Error]", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 TechNexus Systems API running at http://localhost:${PORT}`);
  console.log(`📡 Inquiries API: http://localhost:${PORT}/api/inquiries`);
  console.log(`===============================================`);
});
