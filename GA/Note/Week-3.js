// 1. Variable as Object Key
    // Square bracket = used when the key didn't use a usual attribute

    // Example: let authedUser = Maria
    // you can easily set in user array object to find 'Maria': the user[authedUser].age 

const monster =  {
	name: 'Slimer',
	age: 6,
    'my-name': "John"
}

const someVar = 'name';

console.log(monster[someVar]);  // same as monster['name'];
// console.log(monster.someVar);  //give you undefined
console.log(monster["my-name"]); // John




// 2. For-in LOOP: Looping through Object Keys/Attributes

const movie = {
    title: "L'Avventura",
    director: "Michelangelo Antonioni",
    year: 1960
    }
    

// 'key' is just a variable
for (let key in movie) {
// for (let yourKey in movie) { //it will show the same thing
    console.log(key);
    // console.log(yourKey); //it will show the same thing
    console.log(movie[key]);
    console.log("------");
}

    
// 3. Object.keys() returns an array of keys
    
console.log(Object.keys(movie)) // to prints  [ 'title', 'director', 'year' ]

let keyArr = Object.keys(movie)

for (let i = 0; i < keyArr.length; i++){
    console.log(keyArr[i]) //print the key
    console.log(movie[keyArr[i]]); //print the value
    console.log("------")
}

    