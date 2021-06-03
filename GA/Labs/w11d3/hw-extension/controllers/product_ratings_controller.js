const _ = require("lodash");
const moment = require("moment");
const { ProductRatingModel } = require("../models/product_ratings");
const { ProductModel } = require("../models/products");

module.exports = {
  newForm: (req, res) => {
    //     console.log(req.params.slug);
    res.render("ratings/new", {
      productSlug: req.params.slug,
    });
  },

  createForm: (req, res) => {
    //   validate input that is not empty
    let rating = Number(req.body.rating);

    // capture req.body dari newForm
    ProductModel.findOne({ slug: req.params.slug })
      .then(ratingResp => {
        if (!ratingResp) {
          res.redirect("/products");
          return;
        }
        console.log(1);
        console.log(ratingResp);

        const timestampNow = moment().utc();

        // update database
        return ProductRatingModel.create({
          product_id: ratingResp._id,
          rating: req.body.rating,
          comment: req.body.comment,
          created_at: timestampNow,
          updated_at: timestampNow,
        });
      })
      .then(createResp => {
        console.log(2);
        console.log(createResp);
        res.redirect("/products/" + req.params.slug);
      })
      .catch(err => {
        //   console.log(err);
        res.redirect("/products");
      });
  },
};
