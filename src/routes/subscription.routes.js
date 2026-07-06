const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");

const subscriptionController = require("../controllers/subscription.controller");

const {
    createSubscriptionSchema,
} = require("../validations/subscription.validation");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    validate(createSubscriptionSchema),
    subscriptionController.createSubscription
);

module.exports = router;