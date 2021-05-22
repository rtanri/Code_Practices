const { MongoClient } = require("mongodb");

const connectionStr =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pokemonData = [
  { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
  { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
  { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
  { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
  { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
  { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];

// connect to mongodb
client
  .connect()
  .then(connectedClient => {
    // connection successful

    // get db and collection references
    const db = connectedClient.db("poke_express");
    const pokemonCollection = db.collection("pokemon");

    // insert data
    pokemonCollection
      .insertMany(pokemonData)
      .then(insertResp => {
        console.log(insertResp);
        console.log("insert successful");
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        connectedClient.close();
      });
  })
  .catch(err => {
    // handle err if connection fails
    console.log(err);
  });
