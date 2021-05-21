"use strict"

// Print Function

// Create a function that simply prints "I don't understand the appeal of YanXi Palace". The function accepts no parameter and does not return any value.
// Call the function.

let func1 = () => {
    console.log("I don't understand the appeal of YanXi Palace")
}

func1()


// Print Function with Parameters

// Create a function that accepts 2 parameters. First param is a string of sentence, second is a whole number. Within the function, print the sentence (1st param) by the specified amount of times (2nd param) __ Call the function.

let func2 = (myString, num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        console.log(myString)
    }
}

func2("I love McSpicy", 4)


// Rectangle Surface Area

// Create a function that calculates and returns the area of a rectangle by accepting 2 parameters (length & width).
// Call the function and assign to a variable.
// Print out the variable.

let calcAreaOfRect = (length, width) => {
    return length * width
}

let area = calcAreaOfRect(10, 20)

console.log(area)


// Calculating Dividend Returns

// Remember one of our first exercises when we wrote code to calculate annual dividend returns if we invest in JonJonHotDogBun?
// We should never put all our eggs in one basket, so we want to apply the same piece of code for other companies to find out which
// gives us the most dividend returns.
// Write a function that takes in the initial capital, and an annual dividend returns rate, to calculate the annual dividend receivable.

// Assuming we have $10,000 to buy into EACH of these equities (name - annual dividend rate):

// DBS - 6.22%
// Singtel - 4.4%
// JonJonHotDogBun - 30%
// Using the function you have just wrote, find out how much dividend you will receive at the end of one year from each company.

let calcDividendReturn = (capital, divPercentRate) => {
    if (divPercentRate < 0 || divPercentRate > 100) {
        return -1
    }

    return capital * (divPercentRate / 100)
}

let dbsAnnualDiv = calcDividendReturn(10000, 6.22)
console.log(dbsAnnualDiv)

let singtelAnnualDiv = calcDividendReturn(10000, 4.4)
console.log(singtelAnnualDiv)

let jonJonHotDogBunAnnualDiv = calcDividendReturn(10000, 30)
console.log(jonJonHotDogBunAnnualDiv)


// Item Exists in Array?

// Write a function that will tell if an item exists in an array or not.
// Eg. let haysack = ["coffee machine", "capsule", "cup"]

// Is "water" in the haysack array?
// In this case we can tell from our eyes that no, it is not in the array.
// What if the array has 100s or 1000s of items?
// Therefore write a function to check if a given item can be found in the array or not

let itemExists = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return true
        }
    }

    return false
}

let haysack = ["coffee machine", "capsule", "cup"]

console.log(itemExists(haysack, "coffee machine"))

