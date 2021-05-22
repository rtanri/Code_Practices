const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const pokemonController = require("./controllers/pokemon_controller");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Set view engine
app.set("view engine", "ejs");

// Application Routes

// index route
app.get("/pokemon", pokemonController.index);

// new route (display creation form)
app.get("/pokemon/create", pokemonController.newPokemonForm);

// show route
app.get("/pokemon/:id", pokemonController.show);

// create route
app.post("/pokemon", pokemonController.create);

// edit route
app.get("/pokemon/:id/edit", pokemonController.editPokemonForm);

// update route
app.patch("/pokemon/:id", pokemonController.update);

// delete route
app.delete("/pokemon/:id", pokemonController.delete);

// Initialise MongoDB connection via Mongoose
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost:27017/poke_express?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

// Once DB connection successfully established, do something
db.once("open", function () {
  console.log("MongoDB connection successful");

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
db.on("error", function () {
  console.log("MongoDB connection failed");
});
