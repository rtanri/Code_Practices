// Source: https://time2hack.com/different-ways-to-create-objects-in-javascript/
// How to Create Object by Pankaj


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
    name: 'Full Name',
    email: 'full@gmail.com'
});

//creating new object with 'person' props
const newPersonDetails = Object.assign({}, person, {
    email: 'new.email@domain.com'
});


//changing the email of 'person' object
Object.assign(person, {
    email: 'new.email.forPerson@domain.com'
})

