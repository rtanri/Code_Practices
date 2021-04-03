// Q1
// 'Pet' is the parents
class Pet {
    owner = ""
    name = ""
    walk() {
        console.log('walka walka')
    }

    constructor(name) {
        this.name = name
    }
}

// use the small words in new object 'pompom'
let pompom = new Pet("Fayete")
console.log("--=== testing pompom with Pet class ===--")
console.log(pompom)
pompom.walk();


// Q2. with new attributes PRICE

// 'Dog' is the child of 'Pet'
class Dog extends Pet {
    price = 20

    constructor(name, price) {
        // to pull the constructor from parents
        super(name)
        this.price = price;
    }

    bark() {
        console.log("Bark")
    }
    chaseTail() {
        console.log("keep spining")
    }

    // getter 
    getPrice() {
        return this.price
    }

    // setter - if object want to change the price like Question 4
    setPrice(price) {
        this.price = price
    }
}

// create new object
let bulldog = new Dog("Handsome Boy", 40);
console.log("--=== testing bulldog with Dog class ===--")
bulldog.bark();
bulldog.chaseTail();
console.log(bulldog.getPrice());



// Q3 . Cat Class

// 'Cat' is the child of 'Pet'
class Cat extends Pet {
    price = 10

    constructor(name, price) {
        // to pull the constructor from parents
        super(name)
        this.price = price
    }

    purr() {
        console.log("purrrr")
    }
    clean() {
        console.log("cleaning at day and night")
    }
    getPrice() {
        return this.price;
    }

    // method over-riding
    walk() {
        console.log("strut strut - change from walka walka")
    }
}

// create new cat object
let jessy = new Cat("Jessy", 90);
console.log("--=== testing jessy with Cat class ===--")
jessy.clean();
jessy.walk();
console.log(jessy.getPrice());
jessy.purr();


// 4. update one property of the dog after it has been created and log it to check
// change the Dog.chaseTail()
bulldog.name = "Hercules"

// instead of doing this, in JS dnot have called public/private/protected atribute in OOP
// bulldog.price = 100;

// change with SETTER
bulldog.setPrice(100);

// testing
console.log("--=== testing bulldog after change chaseTail() in Dog class ===--")
console.log(bulldog.name);
bulldog.chaseTail(); // ?? Why Bulldog.bark() still the old value "bark"
console.log(bulldog.getPrice()); // still old price '20', not the updated '35'



// 5. Updated one property of the cat after it has been created and log it to check
console.log("--=== testing jessy after change clean() in Dog class ===--")
jessy.clean();

// you cannot chang ethe CLASS OOP directly
// but use GETTER and SETTER



/* ============ Streches  ============ */

// Using classes, generate a deck of cards, stored in an array
// - cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
// - there are 13 cards per suit, values should match what they are in BlackJack (or another game), - Ace, by default is equal to 11, - cards 2-10 share the same face and value - Jack, Queen and King have a value of 10

// Figure out how to shuffle the array and console.log the top card (Hint: google it)

// Figure out how to compare the top and bottom card and console.log both cards and a message that says which card is bigger (or a tie)

// class Card {
//     value: ""
//     face: ""
//     suit: ""
//     faceUp: true
// }