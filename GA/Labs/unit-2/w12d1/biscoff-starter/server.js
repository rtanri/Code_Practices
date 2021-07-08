// =======================================
//              DEPENDENCIES
// =======================================
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const session = require("express-session");
const productController = require("./controllers/products_controller");
const productRatingController = require("./controllers/product_ratings_controller");
const userController = require("./controllers/user_controller");
const {
  authenticatedOnly: authenticatedOnlyMiddleware,
  guestOnly: guestOnlyMiddleware,
  setUserVarMiddleware,
} = require("./middlewares/auth-middleware");

const app = express();
const port = 3000;
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.set("view engine", "ejs");
// app.set('views', './views')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "user_session",
    resave: false,
    saveUninitialized: false,
    cookie: { path: "/", secure: false, maxAge: 3600000 }, // 3600000ms = 3600s = 60mins, cookie expires in an hour
  })
);
app.use(setUserVarMiddleware);

// =======================================
//              ROUTES
// =======================================

// index
app.get("/products", productController.index);

// new
app.get("/products/new", productController.newForm);

// show
app.get("/products/:slug", productController.show);

// create
app.post("/products", productController.create);

// edit
app.get("/products/:slug/edit", productController.editForm);

// update
app.patch("/products/:slug", productController.update);

// delete
app.delete("/products/:slug", productController.delete);

// product rating routes

app.get("/products/:slug/ratings/new", productRatingController.newForm);

app.post("/products/:slug/ratings", productRatingController.create);

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

// =======================================
//              LISTENER
// =======================================
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => {
    app.listen(port, () => {
      console.log(`Biscoff Bakery app listening on port: ${port}`);
    });
  });
