const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

// Security Headers
app.use(helmet());

// Logging
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Subscription Tracker API is Running...");
});

module.exports = app;