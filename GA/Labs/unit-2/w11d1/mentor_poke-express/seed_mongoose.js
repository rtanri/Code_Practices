const mongoose = require("mongoose");
const { PokemonModel } = require("./models/pokemon");

// Initialise MongoDB connection via Mongoose
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost:27017/poke_express?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

const pokemonData = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg" },
  {
    name: "charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg",
  },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg" },
];

db.once("open", function () {
  console.log("MongoDB connection successful");

  // seeding of data
  PokemonModel.insertMany(pokemonData)
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      db.close();
    });
});
