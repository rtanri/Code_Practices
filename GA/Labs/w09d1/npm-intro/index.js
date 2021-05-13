// 'require' is NODEJS method allow us to import whatever library that you install
// var _ = require('lodash');
const lodash = require('lodash');

let favFood = ["mcspicy", "chicken", "beef", "bubble tea"]

let newArray = lodash.chunk(favFood, 2)

console.log(newArray)
//try run - $node index.js
//[ [ 'mcspicy', 'chicken' ], [ 'beef', 'bubble tea' ] ]