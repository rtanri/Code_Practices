class Pokemon {
        constructor(name, img, index) {
                this.name = name;
                this.img = img + ".jpg";
                this.index = index;
        }

        formatName() {
                return this.name[0].toUpperCase() + this.name.slice(1);
        }
}


const pokemon = [{
                name: "bulbasaur",
                img: "http://img.pokemondb.net/artwork/bulbasaur"
        },
        {
                name: "ivysaur",
                img: "http://img.pokemondb.net/artwork/ivysaur"
        },
        {
                name: "venusaur",
                img: "http://img.pokemondb.net/artwork/venusaur"
        },
        {
                name: "charmander",
                img: "http://img.pokemondb.net/artwork/charmander"
        },
        {
                name: "charizard",
                img: "http://img.pokemondb.net/artwork/charizard"
        },
        {
                name: "squirtle",
                img: "http://img.pokemondb.net/artwork/squirtle"
        },
        {
                name: "wartortle",
                img: "http://img.pokemondb.net/artwork/wartortle"
        }
];

// make multiple Pokemon instances 
// module.exports = pokemon.map(element => new Pokemon(element.name, element.img, pokemon.indexOf(element)))

module.exports = {
        pokemon: pokemon.map((element, index) =>
                new Pokemon(element.name, element.img, index)),
        Pokemon
}