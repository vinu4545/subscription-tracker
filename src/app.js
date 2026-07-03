const express = require("express");
const morgan = require("morgan");

const app = express();

// Logging Middleware
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Subscription Tracker API is Running...");
});

module.exports = app;