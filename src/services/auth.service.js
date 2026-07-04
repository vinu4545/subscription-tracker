const registerUser = () => {
    return {
        success: true,
        message: "User registration service is ready.",
    };
};

const loginUser = () => {
    return {
        success: true,
        message: "User login service is ready.",
    };
};

module.exports = {
    registerUser,
    loginUser,
};