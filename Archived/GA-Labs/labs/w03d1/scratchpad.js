const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];


// filter

let filteredArr = numberArray.filter((item) => {
    return item < 100
})

console.log(filteredArr)

// find

let findItem = numberArray.find((item) => {
    return item === 203
})

console.log(findItem)

// forEach does not return or modify the original array

// map

let newNumArr = numberArray.map((item) => {
    return item * 2
})

console.log(numberArray)
console.log(newNumArr)

let arr = [1, 2, 3, 3]
