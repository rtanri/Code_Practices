const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const pokemonController = require('./controllers/pokemon_controller');

app.use(express.json());
app.use(express.urlencoded({
        extended: true
}));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');

// index route
app.get('/pokemon', pokemonController.index);

// new route (display creation form)
app.get('/pokemon/create', pokemonController.newPokemonForm);

// show route
app.get('/pokemon/:id', pokemonController.show);

// create route
app.post('/pokemon', pokemonController.create);

// edit route
app.get('/pokemon/:id/edit', pokemonController.editPokemonForm)

// update route
app.patch('/pokemon/:id', pokemonController.update)

// delete route
app.delete('/pokemon/:id', pokemonController.update)

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
});