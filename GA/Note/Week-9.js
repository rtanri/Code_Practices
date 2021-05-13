// databases
// 2 type: relational (MySQL), non-relational (mongoDB)

// install: https://docs.mongodb.com/manual/installation/
// version: $ mongo --version

// package manager

// there will be package dependecies from 3rd party
// all library in NPM will be stored in Node_Modules.

// after the download you will see package (e.g. Lodash) in package-lock
// -->   package-lock.json show - what is the exact version that our apps is running
// -->   package.json - show version:"^3.0" means it need a minimum version 3.0 to run the applications.
// -->   certain library might has a dependencies to other library. like 'axios' will depend to 'follow-redirect'



// expressJS

// JS framework for Backend Applications
// $ npm install --save express

// Starter index.js Template - - https://expressjs.com/en/starter/hello-world.html

// For realtime running web - install nodemon to have realtime server update
// $ npm install -g nodemon


/*========== Route Param ===========*/


// Single route param
// app.get('/users/:username, (req, res) => {
//         res.send(users[req.params.username]);
//     });

// Multiple route params
// app.get('/users/:firstname/:lastname, (req, res) => {
// res.send(users[req.firstname][req.lastname]);
// });



/*========== Query Param ===========*/

// Query Param example - shopee.sg/search?keyword=mask
// with Question mark 

// app.get('/users, (req, res) => {
//         res.send(users[req.query.username]);
//     });

// http://localhost/users?username=jonathan.yang

// when we used Route/Query Param - want to avoid Query Param as much as possible (data will be captured in network and we need to protect data/exposed password)



/*========== REST API ===========*/
// https://git.generalassemb.ly/SG-SEIF-5/Course-Materials/blob/master/unit_2/w09d2/instructor_notes/1.%20REST.md


// URL  	        HTTP Verb	Action
// /photos/	        GET	        index           display all photos
// /photos/new	        GET	        new             select new photo
// /photos	        POST	        create          creating the resource/photo
// /photos/:id	        GET	        show            user try to get specific photo
// /photos/:id/edit	GET	        edit            display and edit photo with specific id
// /photos/:id	        PATCH/PUT	update          update 
// /photos/:id          DELETE          destroy         to delete the photo



/*========== Model View Controller (MVC) ===========*/

// 1. Model or data layer contains interaction with DataBase
// 2. View layer contains the UI/UX components and UI/UX logic of the app
// 3. Controller is the “glue” and logic layers of the MVC pattern


/*========== EJS template engine ===========*/

// in order to inject dynamic content into EJS, we need to use some template

// commonly used:
// <% 'Scriptlet' tag, to write a control-flow, no output. can use function IF //use javascript function/syntax use 2 symbols
// <%= Outputs the value into the template (HTML) // dynamic variable use 3 symbols