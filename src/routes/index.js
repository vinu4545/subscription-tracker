const express = require("express");
const homeController = require("../controllers/home.controller");

const router = express.Router();

// Home Route
router.get("/", homeController.getHome);

// Test Route
router.post("/test", (req, res) => {
    res.json({
        success: true,
        data: req.body,
    });
});

router.get("/error", (req, res, next) => {
    const error = new Error("This is a test error");
    error.statusCode = 500;

    next(error);
});
module.exports = router;