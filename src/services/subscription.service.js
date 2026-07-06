const subscriptions = require("../models/subscription.model");

const createSubscription = (subscriptionData, user) => {

    const newSubscription = {
        id: subscriptions.length + 1,

        userId: user.userId,

        ...subscriptionData,

        createdAt: new Date(),
    };

    subscriptions.push(newSubscription);

    return {
        success: true,
        message: "Subscription created successfully.",
        subscription: newSubscription,
    };
};

module.exports = {
    createSubscription,
};