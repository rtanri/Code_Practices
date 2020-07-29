// Multiple ways to create Object in Javacript
// Source: https://time2hack.com/different-ways-to-create-objects-in-javascript/


// 1. Normal Creation
var person = {
    name: 'Bob',
    age: 19,
    bio: () => {
        console.log("Hi, I am Bob");
    }
};


//2. Function creation
function Person(name, age) {
    this.name = name
    this.age = age
    this.bio = function() {
        console.log("Hi, I am Bob");
    }
}

var bob = new Person('Bob', 20); //create Object


//3. Create 1 new Object - with props excluded.
var person = new Object();

person.name = 'Bob';
person['age'] = 21;
person.height = 155;
person.greeting = function () {
    console.log("Hi, I am Student")
}
person.likes =  () => {
    console.log("Pizza and Juice")
}
// question: how did create props can auto-save into new Object Person? how we can stop the autosave?


//4. Create new Object with props included.
var person = new Object({
    name: 'Bob',
    age: 21,
    greeting : function () {
        console.log("I am Student")
    },
    likes : () => {
        console.log("Pizza and Juice")
    }
})


//5.1. Inheritance from #4th
var newPerson = Object.create(person)

newPerson.name = 'Marie'
newPerson.age = 25
newPerson.greeting()

//5.2. Prototype of Main Function-Object
function Animal(name) {
    this.name = name;
}
Animal.prototype.sleep = function() {
    console.log(this.name + ': Zzz...');
}

function Dog(name) {
    this.name = name;
}
// Create a reference for the prototype
Dog.prototype = Object.create(new Animal());


//6. 
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hi, I am Bob")
    }
};

Person.prototype.introduce = function() {
    console.log("Hi, I am Bob")
};

//Create Object
let Bob = Person ("Bob", 21)
bob.greet() //Hi, i am bob
bob.introduce() //"Hi I'm Bob"