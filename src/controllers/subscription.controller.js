const subscriptionService = require("../services/subscription.service");

const createSubscription = (req, res, next) => {

    try {

        const result = subscriptionService.createSubscription(
            req.body,
            req.user
        );

        res.status(201).json(result);

    } catch (error) {

        next(error);

    }

};

module.exports = {
    createSubscription,
};