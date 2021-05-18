const {
        pokemon,
        Pokemon
} = require('../models/pokemon')

module.exports = {
        index: (req, res) => {
                res.render('index', {
                        pokemon
                })
        },

        newPokemonForm: (req, res) => {
                res.render('create')
        },
        show: (req, res) => {
                const selectedPokemon = pokemon[Number(req.params.id)]
                console.log(selectedPokemon)

                res.render('show', {
                        pokemon: selectedPokemon,
                        nextPokemonIndex: Number(req.params.id) + 1,
                        beforePokemonIndex: Number(req.params.id) - 1
                })
        },
        create: (req, res) => {
                const newPokemon = new Pokemon(req.body.name, req.body.img, pokemon.length)
                pokemon.push(newPokemon);
                res.render('created', {
                        pokemon: newPokemon
                })
        }

}