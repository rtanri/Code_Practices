// /* ================================== */
// /* ======= Algorithm & Big-O ======= */
// /* ================================== */

// // Sorting (to arrange data) and Searching (find data)
// // choose the right data structure - array or object

// // How do we find the efficiency = using Big-O Notation
// // to find how efficient an algorithm is: Time complexity, and Space complexity


// // 1. Named: O(n) - FOR loops do 4 operations to compare if apple is being found
// // increase in time is linear : as the number of array index increase, the time increase

// let haysack = ["watermelon", "guava", "grape"]
// let needle = "apple"
// let found = false
// for (let i = 0; i < haysack.length; i++) {
//     if (haysack[i] === needle) {
//         found = true
//         break
//     }
// }
// console.log(found)


// // 2. Named: O(1) - Object just find the right value, without doing operations multiple times
// // only gonna take 1 operations

// let haysack = {
//     "watermelon": "watermelon",
//     "guava": "guava",
//     "grape": "grape"
// }
// let needle = "apple"
// let found = false
// if (haysack[needle] === needle) {
//     found = true
// }

// console.log(found)



// // 3. Named: O(n^2) - Nested loops

// let rowsOfFruits = [
//     ["watermelon", "guava", "grape"],
//     ["kiwi", "strawberry", "dragonfruits"]
// ]

// for (let i = 0; i < rowsOfFruits.length; i++) {
//     for (let j = 0; j < rowsOfFruits[i].length; j++) {
//         console.log(rowsOfFruits[i][j])
//     }
// }

// 4. Named: O(log(n)) - Logarithmic Time 
// highly effective algorithm, divides problems by half each time


// /* ============================================ */
// /* ======= Object Oriented Programming ======== */
// /* ============================================ */


// // 1. Using 'class' as a blueprint for a type of object
// // new obj created from a class will have all the attributes and functions defined in class
// // start with Capital Letter: class Person {...}

// // blueprint, cannot be used directly
// class Person {
//     name = "John"
//     age = 12
//     gender = "m"
//     currentHealth = {}

//     // constructor : allow class to accept parameter, to create object with diff attributes
//     // will accept paramaters and passed to attributes
//     constructor(name, age, gender) {
//         // this 'THIS.name' will set the new objects' name (e.g. Jon's name)
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }

//     speak(words) { //add attribute
//         console.log(words)
//     }
// }


// let jon = new Person("Jonathan", 25, "m");
// jon.speak("mcspicy")
// console.log(jon.age)

// let minshan = new Person("Min Shan", 28, "m");
// minshan.speak("Fille-o-fish")
// console.log(minshan.age);


// class Car {
//     brand = ""
//     name = ""
//     tankCapacity = 0
//     currentPetrolLevel = 0

//     constructor(brand, name, tankCapacity) {
//         this.brand = brand
//         this.name = name
//         this.tankCapacity = tankCapacity
//     }

//     greetOwnerWhenIgnited() {
//         console.log("Hi There")
//     }

//     pumpPetrol(volOfPetrolToPump) {
//         let newPetrolLevel = this.currentPetrolLevel + volOfPetrolToPump

//         if (newPetrolLevel > this.tankCapacity) {
//             return false
//         }

//         this.currentPetrolLevel = newPetrolLevel
//         return true
//     }
// }

// let CurrentCar = new Car("Toyota", "Prius", 30);
// CurrentCar.pumpPetrol(45);
// CurrentCar.greetOwnerWhenIgnited();
// // CurrentCar.pumpPetrol(15);
// console.log(CurrentCar);

/* ============================================ */
/* ======= OOP Concept ======== */
/* ============================================ */

// 1. Abstraction

// 2. Encapsulation

// 3. Polymorphism

// 4. Inheritance
// class can have child classes

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    speak(words) {
        console.log(words)
    }

    greet() {
        console.log('Hi! My name is ' + this.name)
    }
}


class Superman extends Person {
    heroAttire = ""

    constructor(name, age, gender, attire) {
        // use the functionality from parents class
        // executing parent's class's constructor
        // Person(name, age, gender)
        super(name, age, gender)

        this.heroAttire = attire
    }

    fly() {
        console.log('Up up and away!');
    }

    // method over-riding
    greet() {
        console.log("Look at me fly peasants")
    }
}


let superman = new Superman('Tony Stark', 99, 'm')

// Superman can do all things a normal Person can do
superman.speak("Good Morning America");
superman.greet();

// Superman can do his own unique ability
superman.fly()


// Superman can do things differently than a normal Person
// method over-riding

// We can use JS keyword super in a child class to reference attributes and functionalities of parent class

// Superman has his own unique attributes
console.log(superman.name);
console.log(superman.age);
console.log(superman.gender);
console.log(superman.heroAttire);

// child class will auto-use parent's contructor
// if you want to use new attributes/additional parameters, you need to use SUPER to pull the parents constructor to child