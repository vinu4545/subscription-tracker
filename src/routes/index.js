const express = require("express");

const router = express.Router();

// Home Route
router.get("/", (req, res) => {
    res.send("🚀 Subscription Tracker API is Running...");
});

// Test Route
router.post("/test", (req, res) => {
    res.json({
        success: true,
        data: req.body,
    });
});

module.exports = router;