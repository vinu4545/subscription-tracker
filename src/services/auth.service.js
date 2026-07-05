const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

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

const loginUser = async (loginData) => {

    const user = users.find(
        user => user.email === loginData.email
    );

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(
        loginData.password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }

    // Generate JWT
    const token = generateToken(user);

    return {
        success: true,
        message: "Login successful.",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};

module.exports = {
    registerUser,
    loginUser,
};