const express = require('express')
const app = express()
const port = 3000
const {
        pokemon,
        Pokemon
} = require('./models/pokemon')

// to accpet the post in object JSON format
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
        res.render('index', {
                pokemon
        })
})

app.get('/pokemon/:id', (req, res) => {
        const selectedPokemon = pokemon[Number(req.params.id)]
        console.log(selectedPokemon)

        res.render('show', {
                pokemon: selectedPokemon,
                nextPokemonIndex: Number(req.params.id) + 1,
                beforePokemonIndex: Number(req.params.id) - 1
        })
})


app.get('/create', (req, res) => {
        res.render('create')
})


app.post('/pokemon', (req, res) => {
        console.log(`Name: ${req.body.name}, Image: ${req.body.img}`)
        console.log(pokemon)
        // req.body means the request comes from the body.
        const newPokemon = new Pokemon(req.body.name, req.body.img, pokemon.length)
        pokemon.push(newPokemon);
        res.render('created', {
                pokemon: newPokemon
        })
})


app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})