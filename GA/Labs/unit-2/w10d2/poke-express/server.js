const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const pokemonController = require('./controllers/pokemon_controller');

// app.use means that we're trying to use a middleware
app.use(express.json());
app.use(express.urlencoded({
        extended: true
}));
app.use(methodOverride('_method'))
app.use(express.static('public'))

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
app.delete('/pokemon/:id', pokemonController.delete)

// ---

// test patch
app.patch('/test', (req, res) => {
        console.log(req.body)
        res.send('PATCH req')
});

// anatomy of a http request/response
// HTTP method eg. GET/POST/DELETE
// URL
// Headers
// Body


app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
});