// Primitive types are passed by value copy
let x = 10

console.log(10)

function incrementVal(val) {
    val = val + 1
}

incrementVal(x)

console.log(x)

// Arrays and objects are passed by reference
let favFood = ["mcspicy", "mcnuggets"]

console.log(favFood)

function modifyArr(arr) {
    arr[0] = "curry sauce"
}

modifyArr(favFood)

console.log(favFood)
