const homeService = require("../services/home.service");

const getHome = (req, res) => {
    const data = homeService.getHomeData();

    res.status(200).json(data);
};

module.exports = {
    getHome,
};