const authService = require("../services/auth.service");

const register = (req, res) => {
    const result = authService.registerUser();

    res.status(201).json(result);
};

const login = (req, res) => {
    const result = authService.loginUser();

    res.status(200).json(result);
};

module.exports = {
    register,
    login,
};