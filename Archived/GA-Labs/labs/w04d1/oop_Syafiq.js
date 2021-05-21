//Qn1 Create a class for a Pet
class Pet {
    owner = '';
    name = '';

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walka walka');
    }
}
let myCat = new Pet('McSpicy');
console.log(myCat);
myCat.walk();

//-----------------------------------------------------------------------//

//Qn2 Create a class for a Dog
// class Dog extends Pet {
//     price = '';
//     constructor(name, price) {
//         super(name);
//         this.price = price;
//     }

//     bark() {
//         console.log('bark');
//     }

//     chaseTail() {
//         console.log('oh boy oh boy oh boy');
//     }

//     getPrice() {
//         console.log(dog.price);
//     }
// }

// let dog = new Dog('Cupcake', 20);

// dog.bark();
// dog.chaseTail();
// dog.getPrice();

class Dog extends Pet {
    price = 20;

    bark() {
        console.log('bark');
    }

    chaseTail() {
        console.log('oh boy oh boy oh boy');
    }
    // getter
    getPrice() {
        return this.price;
    }

    //setter
    setPrice(price) {
        this.price = price;
    }
}

let dog = new Dog();
dog, bark();
dog.chaseTail();
console.log(dog.getPrice());

//-----------------------------------------------------------------------//

//Qn3 Create a class for a Cat
// class Cat extends Pet {
//     price = '';
//     constructor(name, price) {
//         super(name);
//         this.price = price;
//     }

//     purr() {
//         console.log('purrrrr');
//     }

//     clean() {
//         console.log('cleaning');
//     }

//     getPrice() {
//         console.log(cat.price);
//     }
// }

// let cat = new Cat('Nikko', 20);

// cat.purr();
// cat.clean();
// cat.getPrice();

class Cat extends Pet {
    // look up public/private/protected properties in oop
    price = 10;

    purr() {
        console.log('purrrrr');
    }

    clean() {
        console.log('cleaning');
    }

    getPrice() {
        return this.price;
    }

    walk() {
        console.log('strut strut');
    }
}

let cat = new Cat();
cat.purr();
cat.clean();
console.log(cat.getPrice());
cat.walk();

// update one property of the dog after it has been created and log it to check
let dog2 = new Dog('Titan');
dog2.name = 'Olympian';

// dog2.price = 100
dog2.setPrice = 100;

console.log(dog2.name);
