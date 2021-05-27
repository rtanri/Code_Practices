const mongoose = require("mongoose");

const bakedgoodSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const BakedGoodModel = mongoose.model("BakedGood", bakedgoodSchema);

module.exports = {
  BakedGoodModel: BakedGoodModel,
};
