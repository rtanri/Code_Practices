const mogwai = {
    name: myName,
    age, //literal shorthand
    myHeight: 188,
    "my-height": 188
}

console.log(mogwai.name);

console.log(mogwai["my-height"]);

let keyMyHeight = "my-height"

// when using a variable as a key, we need to use a square bracket notation
console.log(mogwai[keyMyHeight]);
// read from the right to left.
// variable of keyMyHeight


// is it possible to join different data type together?

// object inside the array
let movies = [
    {
        title: "Titanic",
        yearPublish: 1999,
        // array inside an object
        casts:["Jack Hughman", "Rose", "Jack Sparrow"],
    },
    {
        title: "LOTR",
        yearPublish: 2000,
        casts:["Budy", "Alex", "wenjing"],
    }
]

for(let i = 0; i < movies.length; i++){
    console.log(movies[i].title)
}

// Look for SEARCH method

// CSS

// background-contain => keep the aspect ratio, while keep 100% of picture in the screen,
// height: 100vh => just set the height of the image as big as whatever height of parents element is. 
// height: 100% => will only follow the height of parents

// <div id="wrapper"> this is to

// iframe - open website inside the website

// CSS polish - smooth scroll
// back to top - button
// *Learn from Howards work
