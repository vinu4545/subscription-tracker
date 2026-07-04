const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { registerSchema } = require("../validations/auth.validation");

const router = express.Router();

router.post(
    "/register",
    validate(registerSchema),
    authController.register
);

router.post("/login", authController.login);

module.exports = router;