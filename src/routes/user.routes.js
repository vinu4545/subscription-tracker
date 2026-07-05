const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {

    res.json({
        success: true,
        message: "Protected Route Accessed Successfully",
        user: req.user,
    });

});

module.exports = router;