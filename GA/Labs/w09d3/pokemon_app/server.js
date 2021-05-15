const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon')

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

app.post('/pokemon', (req, res) => {
        res.send('pokemon')
})

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})