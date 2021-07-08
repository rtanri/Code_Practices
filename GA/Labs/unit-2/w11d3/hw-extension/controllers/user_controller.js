const { UserModel } = require("../models/users");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const { createHash } = require("crypto");

module.exports = {
  registerForm: (req, res) => {
    // middleware to check user has login
    res.render("users/register");
  },

  registerUser: async (req, res) => {
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

  loginForm: (req, res) => {
    // middleware if login succesfully
    res.render("users/login");
  },
  loginUser: async (req, res) => {
    //   validate if email or password is empty
    let user = null;
    try {
      user = await UserModel.findOne({ email: req.body.email });
    } catch (err) {
      console.log(err);
      res.redirect("/users/login");
      return;
    }
    if (!user) {
      res.redirect("/users/register");
      return;
    }

    //     try to check given password is correct
    const saltedPassword = user.pwsalt + req.body.password;
    let hashInstance = createHash("sha256");
    hashInstance.update(saltedPassword);
    const hashedPassword = hashInstance.digest("hex");

    // compare database pw and created
    if (hashedPassword !== user.hash) {
      res.redirect("/users/login");
    }
    req.session.user = user;
    res.redirect("/users/dashboard");
  },
  dashboard: (req, res) => {
    res.render("users/dashboard");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/products");
  },
};
