const { UserModel } = require("../models/user");
const _ = require("lodash");

module.exports = {
  registration: (req, res) => {
    res.render("products/registration");
  },
  login: (req, res) => {
    res.render("products/login");
  },
};
