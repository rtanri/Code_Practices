// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const methodOverride = require('method-override');
const cakeController = require('./controllers/cake_controller');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// =======================================
//              DATABASE
// =======================================
const mongoose = require('mongoose');
// // local database
// const mongoURI = 'mongodb://localhost:27017/biscoff_bakery?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

// Cloud database
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// =======================================
//              ROUTES
// =======================================

// index
app.get('/bakery', cakeController.index);

// new
app.get('/bakery/new', cakeController.new);

// create
app.post('/bakery', cakeController.create);

// edit
app.get('/bakery/:slug/edit', cakeController.edit);

// update
app.patch('/bakery/:slug', cakeController.update);

// show
app.get('/bakery/:slug', cakeController.show);

//delete
app.delete('/bakery/:slug', cakeController.delete);

// homepage
app.get('/', cakeController.homepage);
// =======================================
//              LISTENER
// =======================================

// console.log(mongoose.connect(mongoURI));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', function () {
    console.log('Server is connected with mongoDB');

    app.listen(port, () => {
        console.log(`Biscoff Bakery app listening on port: ${port}`);
    });
});

db.on('error', function () {
    console.log('MongoDB connection failed');
});
