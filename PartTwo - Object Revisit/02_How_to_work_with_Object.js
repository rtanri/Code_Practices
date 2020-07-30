// Source: https://time2hack.com/different-ways-to-create-objects-in-javascript/
// How to Create Object by Pankaj
// there always a use-cases for each method - learn that!


// 1. Object Notation
const person ={
    name: 'Full Name',
    email: 'full@gmail.com'
};

const employee = {
    id: 80888,
    person: person,
}




// 2. Object Assign
// allow you to create immutable or permanent copies of any object (unable to be changed copy)
const person = Object.assign({
    name: 'Revin',
    email: 'original@domain.com'
});

//creating new object with 'person' props 
const newPersonDetails = Object.assign({}, person, {
    name: 'Selina',
    email: 'newPerson.email.1@domain.com'
});


//changing the email of 'person' object, and not creating copy of existing object.
Object.assign(person, {
    email: 'newPerson.email.2@domain.com'
})




// 3. Spread Operator
// to spread values of any object into another object
const person = {
    name: 'Handome Man',
    email: 'original@domain.com',
};

const personWithAddress = {
    ...person,
    address: 'Somewhere on the Earth'
};

const website = 'https://time2hack.com'

const personWithWebsite = {
    ...personWithAddress,
    website
};




// 4. Having Value of Variable as the key
// You can access the 'value' in the object in the same way you access 'array value' in indexes

const person ={
    name: 'Revin Tanri',
    email: 'original@domain.com',
};

console.log(person.name) //Revin Tanri
console.log(person['name']) //Revin Tanri

const fullNameKey = 'name'; //create an external key of the internal key in the object 

console.log(person[fullNameKey]) //Revin Tanri

// inserting new Key into the Object with 'Key Variable'
const newKey = 'phone';
const phoneNum = '98341240';

person[newKey] = phoneNum;

console.log(person);




// 5. Object.create
// taking other object as reference or prototype, means keep the sample object as reference in its prototype.
// FIND OUT what __proto__ used for

const person = {
    name: 'Full Name',
    email: 'original@domain.com',
}

const revin = Object.create(person);

console.log(revin); //Object: person as revin
console.log(revin.name); //Full Name

// How we can edit the existing key
person.name = 'Full Name with Middle Name';
console.log(revin.name);  //Full Name with Middle Name

console.log(revin.__proto__);

revin.name = 'Revin Tanri';
console.log(revin);
console.log(revin.name);
console.log(revin.__proto__.name);


const Selina = Object.create(person, {
    website: {value: 'www.google.com'}
});

console.log(Selina.__proto__.name) //"Full Name with Middle Name"
console.log(Selina.website) //www.google.com

// Final form of 'Selina' Object
Selina = { 
    website: {value: 'www.google.com'},
    __proto__: {
        name: 'Full Name with Middle Name',
        email: 'original@domain.com',
    }
}




// 6.1. Constructor Function i.e. with NEW keyword

const Person = function (name, email) {
    this.name = name;
    this.email = email;
    return this;
};

const person = new Person('Revin Tanri', 'original@domain.com');


// 6.2. Class with NEW keyword

class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}
