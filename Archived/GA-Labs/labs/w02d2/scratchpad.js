// how do we represent a person's characteristics in a data structure

// person:
// name: Jonathan
// age: 21
// gender: m
// height: 111
// weight: 20

// can we use array?
// let personArr = ["Jonathan", 21, "m", 111, 20]

// console.log(personArr[1])

// personArr[1] = "31"

// console.log(personArr[1])

// let personObj = {
//     name: "Jonathan",
//     age: 21,
//     gender: "m",
//     height: 111,
//     weight: 20
// }

// personObj.name = "Chelsea"

// console.log(personObj.name)

// let car = {
//     model: "telsa",
//     makerYear: 2021,
//     // priceTag: 20000,
// }

// car.priceTag = 20000

// console.log(car.priceTag)

// Create an object called guitar with the following properties:
// a key strings with value 6
// a key isAcoustic with value true (boolean)

// let guitar = {
//     strings: 6,
//     isAcoustic: true,
// }

// // Change the value of strings to 100
// // console.log the value of strings (guitar.strings)

// guitar.strings = 100
// console.log(guitar.strings)

// // Change the value of isAcoustic to false
// // console.log the value of isAcoustic

// guitar.isAcoustic = false
// console.log(guitar.isAcoustic)

// // Without writing into your object directly, add a key belongsTo with the value 'Dimebag Darrell'
// // Console.log the value of belongsTo

// guitar.belongsTo = "Dimebag Darrell"
// console.log(guitar.belongsTo)

// // Change the value of belongsTo to 'Mr. Rogers'
// // Console.log the entire guitar object

// guitar.belongsTo = 'Mr. Rogers'
// console.log(guitar)

// const myName = 'Gizmo';
// const age = 1;

// const mogwai = {
//     name: myName,
//     age, // this means age: age
//     myHeight: 188,
//     "my-height": 188
// }

// // this is dot notation to access object attribute
// console.log(mogwai.name);

// // this is sq bracket notation
// console.log(mogwai["my-height"]);

// let keyMyHeight = "my-height"

// // when using a variable as a key, we need to use sq bracket notation
// console.log(mogwai[keyMyHeight])


// let movies = [
//     {
//         title: "Titanic",
//         yearPublish: 1999,
//         casts: ["Jonathan", "Min Shan", "Chelsea"]
//     },
//     {
//         title: "LOTR",
//         yearPublish: 2000,
//         casts: ["Jonathan", "Min Shan", "Chelsea"]
//     }
// ]

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title)
// }

// const system = { 
//     Mercury: 
//      { radiusp: 'same ',
//        name: 'Mercury',
//        density: 5.43,
//        tilt: 2,
//        image: 'textures/mercury.gif',
//        rotationperiod: 1408,
//        period: 0.24,
//        radiuse: 2439,
//        satellites: 0,
//        au: 0.3871,
//        eccentricity: 0.206,
//        velocity: 47.89,
//        mass: 0.06,
//        inclination: 7 },
// }

// console.log(system.Mercury.satellites)

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
        console.log(arr[i][j])
    }
}

