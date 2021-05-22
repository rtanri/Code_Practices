const { pokemon, Pokemon, PokemonModel } = require("../models/pokemon");
const _ = require("lodash");

module.exports = {
  index: (req, res) => {
    // Pokemon
    PokemonModel.find()
      .then(response => {
        res.render("index", { pokemon: response });
      })
      .catch(err => {
        console.log(err);
        res.send("db error");
      });
  },

  newPokemonForm: (req, res) => {
    res.render("create");
  },

  show: (req, res) => {
    PokemonModel.findOne({ _id: req.params.id })
      .then(response => {
        res.render("show", { pokemon: response });
      })
      .catch(err => {
        console.log(err);
        res.send("db error");
      });
  },

  create: (req, res) => {
    let givenName = req.body.name.toLowerCase();

    // check if given pokemon already exist
    let exist = pokemon.find(element => {
      return element.name === givenName;
    });
    if (exist) {
      res.statusCode = 409;
      res.send("pokemon with given name already exists");
      return;
    }

    const newPokemon = new Pokemon(pokemon.length, givenName, req.body.img);
    pokemon.push(newPokemon);
    res.redirect("/pokemon");
  },

  editPokemonForm: (req, res) => {
    let validatedID = validatePokemonID(req.params.id);

    if (validatedID === false) {
      res.statusCode = 400;
      res.send("given id is invalid");
      return;
    }

    res.render("edit", {
      pokemon: pokemon[validatedID],
      pokemonID: validatedID,
    });
  },

  update: (req, res) => {
    let validatedID = validatePokemonID(req.params.id);

    if (validatedID === false) {
      res.statusCode = 400;
      res.send("given id is invalid");
      return;
    }

    let selectedPokemon = pokemon[validatedID];
    selectedPokemon.name = req.body.name;
    selectedPokemon.img = req.body.img;

    res.redirect("/pokemon/" + validatedID);
  },

  delete: (req, res) => {
    let validatedID = validatePokemonID(req.params.id);

    if (validatedID === false) {
      res.statusCode = 400;
      res.send("given id is invalid");
      return;
    }

    // find pokemon's arr index
    let selectedPokemonIndex = pokemon.findIndex(element => {
      return element.index === validatedID;
    });

    // delete one item from the arr based on index
    pokemon.splice(selectedPokemonIndex, 1);

    res.redirect("/pokemon");
  },
};

function validatePokemonID(id) {
  id = Number(id);

  // check if id is of a number type
  if (isNaN(id)) {
    return false;
  }

  // check that given id is within expected range
  // undefined, null, 0, '', {}, []
  // these are all considered "empty"
  let selectedPokemon = pokemon.find(element => {
    return element.index === id;
  });

  if (!selectedPokemon) {
    return false;
  }

  return id;
}
