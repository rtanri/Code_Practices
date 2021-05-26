const _ = require("lodash");
const { bakedGoods, BakedGoodModel } = require("../models/bakedgoods");

module.exports = {
  index: async (req, res) => {
    let bakedGoods = [];

    try {
      bakedGoods = await BakedGoodModel.find();
    } catch (err) {
      res.statusCode(500);
      return "server error";
    }

    res.render("bakedgoods/index", {
      bakedgoods: bakedGoods,
    });
  },

  newForm: (req, res) => {
    res.render("bakedgoods/new");
  },

  show: (req, res) => {
    BakedGoodModel.find({ slug: req.params.slug })
      .then(item => {
        // if item is not found, redirect to homepage
        if (!item) {
          res.redirect("/bakedgoods");
          return;
        }

        res.render("bakedgoods/show", {
          bakedgood: item,
          bakedgoodIndex: req.params.slug,
        });
      })
      .catch(err => {
        res.redirect("/bakedgoods");
      });
  },

  create: (req, res) => {
    // validate input here

    let slug = _.kebabCase(req.body.name);

    BakedGoodModel.create({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      slug: slug,
    })
      .then(createResp => {
        res.redirect("/bakedgoods");
      })
      .catch(err => {
        console.log(err);
        res.redirect("/bakedgoods/new");
      });
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
