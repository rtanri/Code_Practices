const express = require('express')
const app = express()
const port = 3000
const pokemonController = require('./controllers/pokemon_controller')

app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')

// index route
app.get('/pokemon', pokemonController.index);

//new route (display creation form)
app.get('/create', pokemonController.newPokemonForm)

// show route
app.get('/pokemon/:id', pokemonController.show)

// create route
app.post('/pokemon', pokemonController.create)


app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})