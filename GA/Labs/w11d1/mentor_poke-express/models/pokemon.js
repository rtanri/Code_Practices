const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const PokemonModel = mongoose.model("Pokemon", pokemonSchema);

module.exports = {
  PokemonModel: PokemonModel,
};
