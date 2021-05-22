// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const { bakedGoods, Baked } = require("./models/bakedgoods.js");
const bakedgoodsController = require("./controllers/bakedgoods_controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");

// =======================================
//              ROUTES
// =======================================

// index route

app.get("/bakedgoods", (req, res) => {
  res.render("./bakedgoods/index", { bakedGoods });
});

// show route
app.get("/bakedgoods/:id", (req, res) => {
  let validatedID = validateBakedID(req.params.id);

  if (validatedID === false) {
    res.statusCode = 400;
    res.send("given id is invalid");
    return;
  }

  let selectedIndex = bakedGoods.findIndex(element => {
    return element.index === validatedID;
  });

  res.render("show", { bakedGoods: bakedGoods[selectedIndex] });
});

// new route
app.get("/new", (req, res) => {
  res.render("new", { bakedGoods });
});

// create route
app.get("/create", (req, res) => {
  res.render("create", { bakedGoods });
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`);
});

function validateBakedID(id) {
  id = Number(id);

  // check if id is of a number type
  if (isNaN(id)) {
    return false;
  }

  let selectedIndex = bakedGoods.find(element => {
    return element.index === id;
  });

  if (!selectedIndex) return false;
  return id;
}
