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

const getSubscriptions = (user) => {

    const userSubscriptions = subscriptions.filter(
        subscription => subscription.userId === user.userId
    );

    return {
        success: true,
        count: userSubscriptions.length,
        subscriptions: userSubscriptions,
    };

};


const getSubscriptionById = (subscriptionId, user) => {

    const subscription = subscriptions.find(
        subscription =>
            subscription.id === Number(subscriptionId) &&
            subscription.userId === user.userId
    );

    if (!subscription) {
        throw new Error("Subscription not found");
    }

    return {
        success: true,
        subscription,
    };

};

module.exports = {
    createSubscription,
    getSubscriptions,
    getSubscriptionById,
};