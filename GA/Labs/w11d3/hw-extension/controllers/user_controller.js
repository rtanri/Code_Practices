const { UserModel } = require("../models/users");

module.exports = {
  dashboard: (req, res) => {
    res.render("users/dashboard");
  },
  loginForm: (req, res) => {
    res.render("users/login");
  },
  registerForm: (req, res) => {
    res.render("users/register");
  },
};
