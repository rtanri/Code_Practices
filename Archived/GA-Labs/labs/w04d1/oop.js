// Create a class for a Pet
// attributes
// owner - string
// name - string
// walk - a method that logs 'walka walka'
// instantiating a new pet takes the pets name as a parameter and sets the attribute;
// create one pet and log it
// run the walk method to make sure it works as expected

class Pet {
    owner = ""
    name = ""

    constructor(name) {
        this.name = name
    }

    walk() {
        console.log("walka walka")
    }
}

let myCat = new Pet("McSpicy")
console.log(myCat)
myCat.walk()


// Create a class for a Dog
// this should inherit from Pet
// attributes
// price - 20
// methods
// bark() - log "bark"
// chaseTail() - log "oh boy oh boy oh boy"
// getPrice() - return price
// create a new dog and log it
// test all the methods to make sure they work as expected

class Dog extends Pet {
    price = 20

    bark() {
        console.log("bark")
    }

    chaseTail() {
        console.log("oh boy oh boy oh boy")
    }

    // getter
    getPrice() {
        return this.price
    }

    // setter
    setPrice(price) {
        this.price = price
    }
}

let dog = new Dog()
dog.bark()
dog.chaseTail()
console.log(dog.getPrice())


// Create a class for a Cat
// this should inherit from Pet
// attributes
// price - 10
// methods
// purr() - log "purrrrr"
// clean() - log "cleaning"
// getPrice() - return price
// walk() - overwrite the method to console.log 'strut strut'
// create a new cat and log it
// test all the methods to make sure they work as expected

class Cat extends Pet {
    // look up public/private/protected properties in oop
    price = 10

    purr() {
        console.log("purrrr")
    }

    clean() {
        console.log("cleaning")
    }

    getPrice() {
        return this.price
    }

    // method over-riding
    walk() {
        console.log("strut strut")
    }
}

let cat = new Cat()
cat.purr()
cat.clean()
console.log(cat.getPrice())
cat.walk()


// update one property of the dog after it has been created and log it to check
let dog2 = new Dog("Titan")
dog2.name = "Olympian"

// dog2.price = 100
dog2.setPrice(100)

console.log(dog2.name)


// update one property of the cat after it has been creatd and log it to check

