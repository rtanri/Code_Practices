// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const bakedgoodsController = require("./controllers/bakedgoods_controller");

const app = express();
const port = 3000;
const mongoURI = "mongodb://localhost:27017/biscoff_bakery";

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

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

console.log(mongoose.connect(mongoURI));
// this is a promise
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(response => {
//     app.listen(port, () => {
//       console.log(`Biscoff Bakery app listening on port: ${port}`);
//     });
//   });
