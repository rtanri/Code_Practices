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


//5.2. Prototype of Main Function-Object



//6. 