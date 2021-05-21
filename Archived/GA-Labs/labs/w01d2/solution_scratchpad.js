// WHILE LOOP

// Qns 1.

// Write a while loop that will log in the console

// 'Ginger chocolate honey patties'
// 1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

// Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!

let counter = 0

while(counter < 1000) {
    console.log('Ginger chocolate honey patties')
    counter++
}

// Qns 2

// Write another while loop that counts from 0 to 1000 and will log in the console the current loop number.

// => 0
// => 1
// => 2
// => 3
// etc.

let counter2 = 0

while (counter2 <= 1000) {
    console.log(counter2)
    counter2++
}

// Qns 3

// Write another while loop that prints a message to the console and concatenates the current loop number. Make it count from 0 to 1000.

// => "Current loop number is: 0"
// => "Current loop number is: 1"
// => "Current loop number is: 2"
// => "Current loop number is: 3"

// NOTE: You should not need to see the 'correct answers' in this markdown for these loops. Either they work, or they don't. Test them thoroughly to make sure they are giving you the desired output.

let counter3 = 0

while (counter3 <= 1000) {
    // console.log("Current loop number is: " + counter3)
    console.log(`Current loop number is: ${counter3}`)
    counter3++
}

// FOR LOOP

// Qns 1

// Write a for loop that counts from 0 to 100 and console.logs each number.

for (let i = 0; i <= 100; i++) {
    console.log(i)
}

// Qns 2

// Write another for loop that counts from 7 to 635 (no more, no less!), and console.logs each number.

for (let i = 7; i <= 635; i++) {
    console.log(i)
}

// Qns 3

// Declare a variable let start = 0
// Declare a variable const limit = 100
// Write a for loop that counts from the value of start to the value of limit, using those variables in the control panel of the loop.

let start = 0
const limit = 100

for (start; start <= limit; start++) {
    console.log(start)
}

// Qns 4

// Think of something in real life, or nature, or wherever / whenever that displays looping behavior.
// Use a for loop to model the looping behavior of that thing.

// Where does the loop begin? Where should it end? Does it simply count from one number to another? Or does it change or mutate data?

const lifeOfUniverse = 100

for (let currentLife = lifeOfUniverse; currentLife >= 0; currentLife--) {
    let year = lifeOfUniverse - currentLife
    console.log(`Year ${year}`)
    console.log(`Universe life remaining ${currentLife}`)
}

// ARRAYS & ITERATIONS

// Qns 1

// Think of your top 3 favorite movies. Put them in an array and assign to the variable favMovies
// Print out your 2nd most favourite movie
// You decided to change your 3rd favourite movie to "Godzilla"
// Print out the changed 3rd favourite movie
// Write a loop to print out all your favourite movies

let favMovies = ["Movie1" , "Movie2", "Movie3"]

console.log(favMovies[1])

favMovies[2] = "Godzilla"

console.log(favMovies[2])

for (let i = 0; i < favMovies.length; i++) {
    console.log(favMovies[i])
}
