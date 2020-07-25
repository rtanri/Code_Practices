// Multiple ways to create Object in Javacript


// 1. Normal Creation
var person = {
    name: 'Bob',
    age: 19,
    bio: () => {
        console.log("Hi, I am Student");
    }
};


//2. Function creation
function Person(name, age) {
    this.name = name
    this.age = age
    this.bio = function() {
        console.log("Hi, I am Student");
    }
}

var bob = new Person('Bob', 20); //create Object


//3. Insert Props in empty object
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
