"use strict"

// Part 1

// Create a function that takes a parameter and logs it

function printItem(param) {
    // param = ref. to sayHi function
    param()
}

// Create a second function that logs 'hi'

function sayHi() {
    console.log('hi')
}

// Invoke the first function, passing in the second function as a parameter
// You should see a function reference being logged

printItem(sayHi)

// Alter the first function so that it invokes its parameter
// If you did these steps correctly, you should get a log of 'hi'


// Part 2

// const foo = (param, param2) => {
//     // param = bar (func ref.)
//     // param2 = "hi"

//     // this means executing bar('hi')
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');

// ---

// const foo = (param, param2) => {
//     // param = bar (func. ref.)
//     // param2 = "hi"

//     // bar("hi", "hello")
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// foo(bar, 'hi');

// ...

const foo = (param, param2) => {
    // param = baz (func. ref)
    // param2 = "hello"

    // baz("hello", "hello")
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

const baz = (param) => {
    console.log(param.toUpperCase());
}

foo(baz, 'hello')


// Electric Mixer

const electricMixer = (attachment) => {
    console.log("This mixer is now: " + attachment());
}

const spiralAttachment = () => {
    return "spiralizing";
}

const bubbleTeaShakerAttachment = () => {
    return "making BBT"
}

electricMixer(spiralAttachment);
electricMixer(bubbleTeaShakerAttachment);

// let timeTranspiredInSec = 0

// let clockInterval = setInterval(() => {
//     if (timeTranspiredInSec > 5) {
//         clearInterval(clockInterval)
//     }

//     timeTranspiredInSec += 1
//     console.log(timeTranspiredInSec)
// }, 1000);

const wordReverse = (sentence) => {
    let wordArr = sentence.split(' ')
    wordArr = wordArr.reverse()

    let reversedSentence = wordArr.reduce(
        (accumulator, currentValue) => {
            return accumulator += currentValue.toLowerCase() + " "
        },
        ""
    )

    reversedSentence = reversedSentence.trim()

    // for (let i = 0; i < wordArr.length; i++) {
    //     reversedSentence += wordArr[i] + " "
    // }

    return reversedSentence
}

const toUpperCase = sentence => {
    return sentence.toUpperCase()
}

const repMaster = (mySentence, operationFunc) => {
    let result = operationFunc(mySentence) + " proves that I am the rep MASTER!"
    console.log(result)
}

// expects: "blockhead a to heart your give never proves that I am the rep MASTER!"
repMaster("Never give your heart to a blockhead", wordReverse)

// expects: "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"
repMaster("I finished this practice", toUpperCase)
