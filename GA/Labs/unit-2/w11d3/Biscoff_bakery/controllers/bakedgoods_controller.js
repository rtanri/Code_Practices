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
    BakedGoodModel.findOne({ slug: req.params.slug })
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
        console.log(err);
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
    BakedGoodModel.findOne({ slug: req.params.slug })
      .then(item => {
        res.render("bakedgoods/edit", {
          bakedgood: item,
          bakedgoodIndex: req.params.slug,
        });
      })
      .catch(err => {
        res.redirect("/bakedgoods");
      });
  },

  update: (req, res) => {
    let newSlug = _.kebabCase(req.body.name);

    BakedGoodModel.updateOne(
      { slug: req.params.slug },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          image: req.body.image,
          slug: newSlug,
        },
      }
    )
      .then(updateResp => {
        res.redirect("/bakedgoods/" + newSlug);
      })
      .catch(err => {
        res.redirect("/bakedgoods/" + req.params.slug + "/show");
      });
  },

  delete: (req, res) => {
    BakedGoodModel.deleteOne({ slug: req.params.slug })
      .then(deleteResp => {
        res.redirect("/bakedgoods");
      })
      .catch(err => {
        console.log(err);
        res.redirect("/bakedgoods");
      });
  },
};
