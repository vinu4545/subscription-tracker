const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../models/user.model");

const registerUser = async (userData) => {

    const existingUser = users.find(
        user => user.email === userData.email
    );

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
    };

    users.push(newUser);
    console.log(users);
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

const loginUser = async (userData) => {
    return {
        success: true,
        message: "User login service is ready.",
        user: userData,
    };
};

module.exports = {
    registerUser,
    loginUser,
};