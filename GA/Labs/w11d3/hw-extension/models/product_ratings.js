const mongoose = require("mongoose");

// create Schema
const productRatingSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamp: true }
);
const ProductRatingModel = mongoose.model(
  "productratings",
  productRatingSchema
);

module.exports = {
  ProductRatingModel: ProductRatingModel,
};
