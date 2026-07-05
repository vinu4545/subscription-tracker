const express = require("express");

const homeController = require("../controllers/home.controller");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Home Route
|--------------------------------------------------------------------------
*/

router.get("/", homeController.getHome);

/*
|--------------------------------------------------------------------------
| Test Route
|--------------------------------------------------------------------------
*/

router.post("/test", (req, res) => {
    res.json({
        success: true,
        data: req.body,
    });
});

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
|
| All authentication-related routes are mounted under /auth.
| Examples:
| POST /auth/register
| POST /auth/login
|
*/

router.use("/auth", authRoutes);

/*
|--------------------------------------------------------------------------
| User Routes (Protected)
|--------------------------------------------------------------------------
|
| Examples:
| GET /users/profile
|
*/

router.use("/users", userRoutes);

/*
|--------------------------------------------------------------------------
| Test Error Route
|--------------------------------------------------------------------------
*/

router.get("/error", (req, res, next) => {
    const error = new Error("This is a test error");
    error.statusCode = 500;

    next(error);
});

module.exports = router;