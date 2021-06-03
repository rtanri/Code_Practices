// =======================================
//              DEPENDENCIES
// =======================================
require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const methodOverride = require("method-override");
const productController = require("./controllers/products_controller");
const productRatingController = require("./controllers/product_ratings_controller");
const userController = require("./controllers/user_controller");
const {
  authenticatedOnly: authenticatedOnlyMiddleware,
  guestOnly: guestOnlyMiddleware,
  setUserVarMiddleware: setUserVarMiddleware,
} = require("./middlewares/authMiddleware");

const session = require("express-session");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "user_session",
    resave: false,
    saveUninitialized: false, // need for login session
    cookie: { path: "/", secure: false, maxAge: 3600000 }, // 3600000ms = 3600s = 60mins, cookie expires in an hour
  })
);
app.use(setUserVarMiddleware);
// =======================================
//              DATABASE
// =======================================
const mongoose = require("mongoose");
// // local database
// const mongoURI = 'mongodb://localhost:27017/biscoff_bakery?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

// Cloud database
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// =======================================
//              ROUTES
// =======================================

// index
app.get("/products", productController.index);

// new
app.get("/products/new", productController.new);

// create
app.post("/products", productController.create);

// edit
app.get("/products/:slug/edit", productController.edit);

// update
app.patch("/products/:slug", productController.update);

// show
app.get("/products/:slug", productController.show);

//delete
app.delete("/products/:slug", productController.delete);

// product rating routes
app.get("/products/:slug/ratings/new", productRatingController.newForm);

// product rating routes
app.post("/products/:slug/ratings", productRatingController.createForm);

// users
app.get("/users/register", guestOnlyMiddleware, userController.registerForm);
app.post("/users/register", guestOnlyMiddleware, userController.registerUser);

app.get("/users/login", guestOnlyMiddleware, userController.loginForm);
app.post("/users/login", guestOnlyMiddleware, userController.loginUser);

app.get(
  "/users/dashboard",
  authenticatedOnlyMiddleware,
  userController.dashboard
);

app.post("/users/logout", authenticatedOnlyMiddleware, userController.logout);

// homepage
app.get("/", productController.homepage);
// =======================================
//              LISTENER
// =======================================

// console.log(mongoose.connect(mongoURI));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", function () {
  console.log("Server is connected with mongoDB");

  app.listen(port, () => {
    console.log(`Biscoff Bakery app listening on port: ${port}`);
  });
});

db.on("error", function () {
  console.log("MongoDB connection failed");
});
