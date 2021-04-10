// A HTTP request or response has these 4 components:
// Endpoint - the url address
// Methods - the type of envelope
// Headers - meta-details eg. name of recipient, return address, etc
// Body - actual contents of the letter


// 1. All type of Methods
// GET
// To retrieve some resources from a server
// When you surf websites in browsers, these are mostly GET requests

// POST
// Create new resource in server
// User registration - creates a new user (resource) in backend

// PATCH
// Modify field(s) of an existing resource
// User updates profile
// YOUR ORIGINAL DATA (name: John, age: 11) -  when patch, you just change the value

// PUT
// Similar to PATCH, BUT
// Instead of modifying one or more fields, PUT replaces the entire resources
// YOUR ORIGINAL DATA (name, age) -  when you put, you delete all ORIGINAL entry, re-create new ENTRY with new value


// DELETE
// Remove a server resource
// User deletes an item in shopping cart


// 2. JSON

{
    "username": "trolololll",
    "password": "password"
}

[{
        "id": 1,
        "name": "Jonathan"
    },
    {
        "id": 2,
        "name": "Kevin"
    },
]



// 3. Check the website API
// inspect > Network tab > Doc:
// > Header: to see General, Response Header, and Request Header
// > Response: to see what are the Response sent



// 4. Collaboration with POSTMAN
// using API easily without rely on browser
// you can see the content of JSON before GET with AJAX
// New > Collection > fill in the GET(e.g.https: //pokeapi.co/api/v2/pokemon/charmander)



// 5. AJAX - Asynchronous
// allow to update page without reloading the page , can access with no internet

// jQuery.ajax