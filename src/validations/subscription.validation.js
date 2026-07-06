const { z } = require("zod");

const createSubscriptionSchema = z.object({
    name: z
        .string()
        .min(2, "Subscription name is required"),

    price: z
        .number()
        .positive("Price must be greater than 0"),

    billingCycle: z.enum(["monthly", "yearly"]),

    category: z
        .string()
        .min(2, "Category is required"),
});

module.exports = {
    createSubscriptionSchema,
};