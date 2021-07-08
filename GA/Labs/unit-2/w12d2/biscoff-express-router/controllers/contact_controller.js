const axios = require("axios");

module.exports = {
  showContactForm: (req, res) => {
    res.render("pages/contact");
  },

  submitContactForm: (req, res) => {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
