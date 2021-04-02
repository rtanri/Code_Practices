// Q1
class Pet {
    owner = ""
    name = ""
    walk() {
        console.log('walka walka')
    }

    constructor(owner, name) {
        this.owner = owner
        this.name = name
    }
}

let Pompom = new Pet("Jon", "Fayete");
console.log(Pompom)
Pompom.walk();


// Q2.

class Dog extends Pet {
    price = 20
    bark() {
        console.log("Bark")
    }
    chaseTail() {
        console.log("oh boy oh boy")
    }
    getPrice() {
        return this.price;
    }
}

// create new object
let Bulldog = new Dog("Ms Susy", "Handsome Boy");
Bulldog.bark();
Bulldog.getPrice();


// Q3 . Cat Class
class Cat extends Pet {
    price = 10
    purr() {
        console.log("purrrr")
    }
    clean() {
        console.log("cleaning")
    }
    getPrice() {
        return this.price;
    }
    walk() {
        console.log("strut strut")
    }
}

// create new cat object
let Jessy = new Cat("Ms Monica", "Jessy");
Jessy.clean();
Jessy.walk();
Jessy.getPrice();
Jessy.purr();


// 4. update one property of the dog after it has been created and log it to check
Dog.bark = () => {
    console.log("Woof woof")
};
Dog.price = 35; //price go up because of COVID

// testing
Dog.bark();
Bulldog.bark(); // ?? Why Bulldog.bark() still the old value "bark"
console.log(Bulldog.getPrice()); // still old price '20', not the updated '35'


console.log(typeof Dog.bark); // function
console.log(typeof Dog.getPrice); // why 'undefined', not 'function' like Dog.bark()
console.log(typeof Bulldog.getPrice()); //number





// 5. Updated one property of the cat after it has been creatd and log it to check
Jessy.price = 55;
console.log(Jessy.price);
console.log(Jessy.getPrice()); // give '55', why Bulldog.getPrice() still old value
Jessy.clean();