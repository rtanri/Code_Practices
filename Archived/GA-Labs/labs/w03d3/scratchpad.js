// O(n)

// let haysack = ["watermelon", "guava", "grape", "apple", "asdasd"]
// let needle = "apple"
// let found = false

// for (let i = 0; i < haysack.length; i++) {
// 	if (haysack[i] === needle) {
// 		found = true
// 		break
// 	}
// }

// console.log(found)


// O(1)
let haysack = {
    "watermelon": "watermelon",
    "guava": "guava",
    "grape": "grape",
    "apple": "apple"
}
let needle = "apple"
let found = false

if (haysack[needle] === needle) {
    found = true
}

// console.log(found)

// let rowsOfFruits = [
//     ["watermelon", "guava", "grape"],
//     ["kiwi", "strawberry", "dragonfruit"]
// ]

// for (let i = 0; i < rowsOfFruit.length; i++) {
//     for (let j = 0; j < rowsOfFruits[i].length; j++) {
//         console.log(rowsOfFruits[i][j])
//     }
// }

// -----

// class is just a blueprint, can't be used directly
class Person {
    name = ""
    age = 0
    gender = ""
    currentHealth = {}

    constructor(myName, myAge, gender) {
        this.name = myName
        this.age = myAge
        this.gender = gender
    }

    speak(words) {
        console.log(words)
    }

    greet() {
        console.log('Hi! My name is ' + this.name)
    }
}

let jon = new Person("Jonathan", 18, "m")
jon.speak("mcspicy")
console.log(jon.age)
jon.greet()

let minshan = new Person("Min Shan", 28, "m")
minshan.speak("love GA")
console.log(minshan.age)
minshan.greet()

// -----

class Car {
    brand = ""
    name = ""
    tankCapacity = 0
    currentPetrolLevel = 0

    constructor(brand, name, tankCapacity) {
        this.brand = brand
        this.name = name
        this.tankCapacity = tankCapacity
    }

    greetOwnerWhenIgnited() {
        console.log("Welcome to your new Tesla")
    }

    pumpPetrol(volOfPetrolToPump) {
        let newPetrolLevel = this.currentPetrolLevel + volOfPetrolToPump

        if (newPetrolLevel > this.tankCapacity) {
            return false
        }

        this.currentPetrolLevel = newPetrolLevel
        return true
    }
}

let myCar = new Car("Telsa", "Model S", 100)
myCar.greetOwnerWhenIgnited()

myCar.pumpPetrol(50)
console.log(myCar.currentPetrolLevel)

myCar.pumpPetrol(30)
console.log(myCar.currentPetrolLevel)

myCar.pumpPetrol(50)
console.log(myCar.currentPetrolLevel)

    
