require("dotenv").config();

const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = (
  process.env.FRONTEND_URL || "http://localhost:3000"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Accurate Thermal Systems backend is running.",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is healthy.",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/enquiries", enquiryRoutes);

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request.",
    });
  }

  if (err.message === "Origin not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Origin not allowed.",
    });
  }

  console.error("Backend error:", err.message);

  return res.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

app.listen(PORT, () => {
  console.log(`Accurate Thermal backend running on port ${PORT}`);
});

