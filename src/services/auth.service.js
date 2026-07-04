const users = require("../models/user.model");

const registerUser = (userData) => {

    const existingUser = users.find(
        user => user.email === userData.email
    );

    if (existingUser) {
        throw new Error("User already exists");
    }

    const newUser = {
        id: users.length + 1,
        ...userData,
    };

    users.push(newUser);

    return {
        success: true,
        message: "User registered successfully.",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
    };
};

const loginUser = () => {
    return {
        success: true,
        message: "Login service coming next.",
    };
};

module.exports = {
    registerUser,
    loginUser,
};