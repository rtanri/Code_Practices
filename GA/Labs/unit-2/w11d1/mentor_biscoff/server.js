// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const methodOverride = require("method-override");
const bakedgoodsController = require("./controllers/bakedgoods_controller");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.set('views', './views')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// =======================================
//              ROUTES
// =======================================

// index
app.get("/bakedgoods", bakedgoodsController.index);

// new
app.get("/bakedgoods/new", bakedgoodsController.newForm);

// show
app.get("/bakedgoods/:id", bakedgoodsController.show);

// create
app.post("/bakedgoods", bakedgoodsController.create);

// edit
app.get("/bakedgoods/:id/edit", bakedgoodsController.editForm);

// update
app.patch("/bakedgoods/:id", bakedgoodsController.update);

// delete
app.delete("/bakedgoods/:id", bakedgoodsController.delete);

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`);
});
