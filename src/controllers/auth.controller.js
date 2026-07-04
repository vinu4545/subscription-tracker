const authService = require("../services/auth.service");

const register = (req, res, next) => {

    try {

        const result = authService.registerUser(req.body);

        res.status(201).json(result);

    } catch (error) {

        next(error);

    }

};

const login = (req, res) => {

    const result = authService.loginUser();

    res.status(200).json(result);

};

module.exports = {
    register,
    login,
};