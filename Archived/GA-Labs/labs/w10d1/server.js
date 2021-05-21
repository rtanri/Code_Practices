
const express = require('express');
const app = express();
const port = 3000;
const { pokemon, Pokemon } = require('./models/pokemon');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { pokemon });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/pokemon/:id', (req, res) => {
    const selectedPokemon = pokemon[Number(req.params.id)];
    res.render('show', { pokemon: selectedPokemon });
});

app.post('/pokemon', (req, res) => {
    const newPokemon = new Pokemon(pokemon.length, req.body.name, req.body.img);
    pokemon.push(newPokemon);
    res.render('created', { pokemon: newPokemon });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
