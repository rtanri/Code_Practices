// 1. Query will generate an object.

// console.log("req.query", req.query)
// will generate an object 
// log result ==> req.query { state: 'SC', shape: 'Sphere' }

// // 2. In Pokemon.map, you can import the index 

// module.exports = pokemon.map((element, index) =>
//         new Pokemon(element.name, element.img, index))

// 3. post route allow you to react from the data give by the user, like user login, add new pokemon into database


// 4. by default, FORM submit always do GET request
// need to change with this: <form action="/pokemon" method="POST">


// // express.json() will enable express to receive post requests from postman.
// app.use(express.json())
// app.use -> means trying to use a middleware
// middleware will intercept the HTTP request, before hitting ROUTES.
// all routes supposed to be accessable, only when user is login -> there will be middleware to check user login.

// //express.urlencoded() will enable to receive posts requests from ur forms
// app.use(express.urlencoded())



/* ============ CURL ============ */

// Curl is like POstman, but it didn't arrange nicely like POstman.
// 


/* ============ Lodash ============ */

// utility library that allow you to extend the JS like _.camelcase, _.capitalise


// If you want to update something, you need to use PATCH. Different from PUT.

// redirect = will change the url to destination


/* ============ Method Override ============ */

// to overide method from POST into , usually used in FORM
// reason we use: due to limitation of HTML <form>, only allow POST & GET request.

// body-parser no need to be put again after you used app.use(express.urlencoded({ extended: true }));

// query parameter goes to route, id.

// when you submit form, it will goes inside the BODY.
// when PATCH, you look at the data inside the BODY. console.log(req.body)


/* ============ Static File ============ */

// app.use(express.static('public'))


/* ============ App Infrastructure ============ */
// how we setup server
// how we allow outside ppl interact with app
// how we ensure not crash
// how we manage the traffic

// We are actually doing both frontend and backend - known as “monolithic apps”:
// Every aspect of the app is contained in a single tier (UI, business logic, data, etc)
// The application will perform every single step to achieve every single tasks
// ------- Get data from DB
// ------- Show retrieved data in UI
// ------- Handle form submissions
// ------- Apply business logic
// ------- Store data into DB



/* ============ MongoDB ============ */

// 1 installation in mongoDB means 1 database.

// which database you want to use, you need to specify or they will create itself


/* ============ CRUD ============ */
// CRUD (Create, Read, Update, Delete) operations allow you to work with the data stored in MongoDB