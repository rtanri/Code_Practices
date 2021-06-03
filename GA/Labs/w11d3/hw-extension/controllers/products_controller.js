// const { cakes, Baked } = require('../models/biscuit.js');
const { ProductModel } = require("../models/products");
const { ProductRatingModel } = require("../models/product_ratings");
const _ = require("lodash");

module.exports = {
  homepage: (req, res) => {
    res.render("products/homepage");
  },

  index: async (req, res) => {
    let products = [];
    try {
      products = await ProductModel.find();
    } catch (err) {
      res.statusCode(500);
      return "Server error 500";
    }
    res.render("products/index", {
      products: products,
    });
  },

  show: (req, res) => {
    let product = {}; // to make the item is available outside of scope

    // find 1 item instead of array with slug searched
    ProductModel.findOne({ slug: req.params.slug }) // prettier-ignore

      .then(item => {
        console.log("success");

        // if item is not found, redirect home
        if (!item) {
          res.redirect("/products");
        }
        product = item;

        // get all product ratings of 1 item from database
        return ProductRatingModel.find({ product_id: item._id }).sort({
          created_at: "desc",
        });
        fie;
      })

      // prettier-ignore
      .then(ratingResp => {
        res.render("products/show", {
          product: product,
          ratings: ratingResp,
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("/products");
      });
  },
  new: (req, res) => {
    res.render("products/new");
  },
  create: (req, res) => {
    let slug = _.kebabCase(req.body.name);

    ProductModel.create({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      slug: slug,
    })
      .then(createResp => {
        res.redirect("/products");
      })
      .catch(err => {
        console.log(err);
        res.redirect("/products/new");
      });
  },
  edit: (req, res) => {
    ProductModel.findOne({ slug: req.params.slug })
      .then(item => {
        res.render("products/edit", {
          product: item,
          // productIndex: req.params.slug,
        });
      })
      .catch(err => {
        res.redirect("/products");
      });
  },
  update: (req, res) => {
    let newSlug = _.kebabCase(req.body.name);

    ProductModel.updateOne(
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
        res.redirect("/products/" + newSlug);
      })
      .catch(err => {
        res.redirect("/products/" + req.params.slug + "/edit");
      });
  },
  delete: (req, res) => {
    ProductModel.deleteOne({ slug: req.params.slug })
      .then(deleteResp => {
        res.redirect("/products");
      })
      .catch(err => {
        console.log(err);
        res.redirect("/products");
      });
  },
};

// =======================================
//     Previous EJS Express Code
// =======================================

// module.exports = {
//     homepage: (req, res) => {
//         res.render('bakery/homepage');
//     },

//     index: (req, res) => {
//         res.render('bakery/index', { cakes });
//     },

//     show: (req, res) => {
//         res.render('bakery/show', {
//             cake: cakes[req.params.id],
//             cakeIndex: req.params.id
//         });
//     },
//     new: (req, res) => {
//         res.render('bakery/new');
//     },
//     create: (req, res) => {
//         console.log(req.body);
//         const newEntry = new Baked(
//             req.body.name,
//             req.body.price,
//             req.body.image
//         );
//         cakes.push(newEntry);
//         // it didn't render new page, so we open existing page with redirect('/bakery')
//         res.redirect('/bakery');
//     },
//     edit: (req, res) => {
//         res.render('bakery/edit', {
//             cakes: cakes[req.params.id],
//             cakeIndex: req.params.id
//         });
//     },
//     update: (req, res) => {
//         cakes[req.params.id].name = req.body.name;
//         cakes[req.params.id].price = req.body.price;
//         cakes[req.params.id].image = req.body.image;

//         res.redirect('/bakery/' + req.params.id);
//     },
//     delete: (req, res) => {
//         cakes.splice(req.params.id, 1);
//         res.redirect('/bakery');
//     }
// };
