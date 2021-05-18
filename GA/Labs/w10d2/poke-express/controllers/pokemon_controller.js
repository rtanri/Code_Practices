const {
        pokemon,
        Pokemon
} = require('../models/pokemon');
const _ = require('lodash')

module.exports = {

        index: (req, res) => {
                res.render('index', {
                        pokemon
                });
        },

        newPokemonForm: (req, res) => {
                res.render('create');
        },

        show: (req, res) => {
                let id = Number(req.params.id)

                // check if id is of a number type
                if (isNaN(id)) {
                        res.statusCode = 400
                        res.send('id must be a valid number')
                        return
                }

                // check that given id is within expected range
                // undefined, null, 0, '', {}, []
                // these are all considered "empty"
                if (_.isEmpty(pokemon[id])) {
                        res.statusCode = 404
                        res.send('cannot find pokemon with the given id')
                        return
                }

                res.render('show', {
                        pokemon: pokemon[id]
                });
        },

        create: (req, res) => {
                let givenName = req.body.name.toLowerCase()

                // check if given pokemon already exist
                let exist = pokemon.find(element => {
                        return element.name === givenName
                });
                if (exist) {
                        res.statusCode = 409
                        res.send('pokemon with given name already exists')
                        return
                }

                const newPokemon = new Pokemon(pokemon.length, givenName, req.body.img);
                pokemon.push(newPokemon);
                res.render('created', {
                        pokemon: newPokemon
                });
        }

}