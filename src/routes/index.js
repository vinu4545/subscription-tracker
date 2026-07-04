const express = require("express");
const homeController = require("../controllers/home.controller");
const authRoutes = require("./auth.routes");

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


router.get("/", homeController.getHome);

// we have used .use rather than .post because we want to use all the routes defined in authRoutes, not just a single route. The .use method allows us to mount the authRoutes on the /auth path, so any requests to /auth/register or /auth/login will be handled by the corresponding routes defined in authRoutes.
router.use("/auth", authRoutes);


router.get("/error", (req, res, next) => {
    const error = new Error("This is a test error");
    error.statusCode = 500;

    next(error);
});
module.exports = router;