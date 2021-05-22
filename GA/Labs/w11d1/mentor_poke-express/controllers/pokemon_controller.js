const { PokemonModel } = require("../models/pokemon");
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
    let name = req.body.name;
    let img = req.body.img;

    // http://img.pokemondb.net/artwork/venusaur.jpg
    // split :
    // [ http://img pokemondb net/artwork/venusaur jpg ]
    let imgParts = img.split(".");
    if (imgParts[imgParts.length - 1] !== "jpg") {
      res.statusCode = 400;
      res.send("must be jpg");
      return;
    }

    PokemonModel.create({
      name: name,
      img: img,
    })
      .then(response => {
        res.redirect("/pokemon");
      })
      .catch(err => {
        console.log(err);
        res.send("error occurred");
      });
  },

  editPokemonForm: (req, res) => {
    // find the pokemon details from DB
    PokemonModel.findOne({ _id: req.params.id })
      .then(response => {
        // then render template with pokemon details
        res.render("edit", {
          pokemon: response,
        });
      })
      .catch(err => {
        console.log(err);
        res.send("db error");
      });
  },

  update: (req, res) => {
    if (!req.body.name) {
      res.redirect("/pokemon/" + req.params.id + "/edit");
      return;
    }

    let imgParts = req.body.img.split(".");
    if (imgParts[imgParts.length - 1] !== "jpg") {
      res.redirect("/pokemon/" + req.params.id + "/edit");
      return;
    }

    PokemonModel.updateOne(
      { _id: req.params.id },
      {
        $set: { name: req.body.name, img: req.body.img },
      }
    )
      .then(response => {
        res.redirect("/pokemon/" + req.params.id);
      })
      .catch(err => {
        console.log(err);
        res.send("db error");
      });
  },

  delete: (req, res) => {
    PokemonModel.deleteOne({ _id: req.params.id })
      .then(response => {
        res.redirect("/pokemon");
      })
      .catch(err => {
        res.send("db err");
      });
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
