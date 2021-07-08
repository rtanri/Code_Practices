const { bakedGoods } = require("../models/bakedgoods");

module.exports = {
  index: (req, res) => {
    res.render("bakedgoods/index", {
      bakedgoods: bakedGoods,
    });
  },

  newForm: (req, res) => {
    res.render("bakedgoods/new");
  },

  show: (req, res) => {
    // validate input

    res.render("bakedgoods/show", {
      bakedgood: bakedGoods[req.params.id],
      bakedgoodIndex: req.params.id,
    });
  },

  create: (req, res) => {
    // validate input

    bakedGoods.push({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
    });

    res.redirect("/bakedgoods");
  },

  editForm: (req, res) => {
    res.render("bakedgoods/edit", {
      bakedgood: bakedGoods[req.params.id],
      bakedgoodIndex: req.params.id,
    });
  },

  update: (req, res) => {
    bakedGoods[req.params.id].name = req.body.name;
    bakedGoods[req.params.id].price = req.body.price;
    bakedGoods[req.params.id].image = req.body.image;

    res.redirect("/bakedgoods/" + req.params.id);
  },

  delete: (req, res) => {
    bakedGoods.splice(req.params.id, 1);
    res.redirect("/bakedgoods");
  },
};
