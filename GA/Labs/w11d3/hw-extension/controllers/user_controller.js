const { UserModel } = require("../models/users");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const { createHash } = require("crypto");

module.exports = {
  dashboard: (req, res) => {
    res.render("users/dashboard");
  },
  loginForm: (req, res) => {
    res.render("users/login");
  },
  registerForm: async (req, res) => {
    // validate first & last name
    if (!req.body.first_name || !req.body.last_name) {
      res.redirect("/users/register");
      return;
    }

    // ensure password and confirm password matches
    if (req.body.password !== req.body.password_confirm) {
      res.redirect("/users/register");
      return;
    }

    // ensure that there is no existing user account with the same email given
    let user = null;
    try {
      user = await UserModel.findOne({ email: req.body.email });
    } catch (err) {
      console.log(err);
      res.redirect("/users/register");
      return;
    }
    if (user) {
      res.redirect("/users/register");
      return;
    }

    const timestampNow = moment().utc();
    const salt = uuidv4();
    const saltedPassword = salt + req.body.password;

    const hashInstance = createHash("sha256");
    hashInstance.update(saltedPassword);

    try {
      await UserModel.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        pwsalt: salt,
        hash: hashInstance.digest("hex"),
        created_at: timestampNow,
        updated_at: timestampNow,
      });
    } catch (err) {
      console.log(err);
      res.redirect("/users/register");
      return;
    }

    res.redirect("/users/dashboard");
  },
};
