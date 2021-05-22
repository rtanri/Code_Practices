const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const PokemonModel = mongoose.model("Pokemon", pokemonSchema);

class Pokemon {
  constructor(index, name, img) {
    this.index = index;
    this.name = name;
    this.img = img + ".jpg";
  }

  formatName() {
    return this.name[0].toUpperCase() + this.name.slice(1);
  }
}

const pokemon = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
  { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];

module.exports = {
  pokemon: pokemon.map(
    (element, index) => new Pokemon(index, element.name, element.img)
  ),
  // equivalent to Pokemon: Pokemon,
  Pokemon,
  PokemonModel: PokemonModel,
};
