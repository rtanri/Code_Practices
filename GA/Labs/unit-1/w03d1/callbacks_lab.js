// Q1. Morning Labs

// Create a function that takes a parameter and logs it
function inputWords(callback){
    callback()
}


// Create a second function that logs 'hi'
function sayHi(){
    console.log("Hi")
}
// Invoke the first function, passing in the second function as a parameter
inputWords(sayHi);


// Part 2
const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi'); // only print 'hi'


// Part 3
const foo1 = (param, param2) => {
    param(param2, 'hello');
}

const bar2 = (param, param2) => {
    console.log(param2);
}

foo1(bar2, 'hi');
// bar(param2, "hello") ==> {print "hello"}


const baz = (param) => {
    console.log(param.toUpperCase());
}

foo1(baz, 'dasani')
// baz("hello", "dasani") ==> print DASANI


// Q2. Mixer

function electricMixer(attachment){
    console.log("This mixer is now: " + attachment())
}

const spiralizing = () => {
    return "spiralling"
}

electricMixer(spiralizing);

const slicerDicer = () => {
    return "slicin' and dicin'";
}

electricMixer(slicerDicer);


// Q3. setInterval and setTimeout

// Set interval 1 seconds

function howLong(seconds){
    var time = 1;
    var interval = setInterval(() => {
        console.log(time);
        time++;

    if (time === seconds){
        clearInterval(interval);
    }
    
    }, 1000);


}

howLong(4);


// function timer(seconds){
//     let counter = 0;

//     var looper = setInterval(function(){ 
//         counter++;
//         console.log("Counter is: " + counter);

//         if (counter >= seconds)
//         {
//             clearInterval(looper);
//         }

//     }, 1000);
// }

// timer(3);


// Create a function called wordReverse that reverses a string.

let abc = "I like mcspicy"

// function to reverse sentence
function wordReverse(param){
    if (typeof param === "string"){
        console.log(param.split(" ").reverse().join(" ") + " proves that I am the rep MASTER!");
    }
}

// function to uppercase sentence
function toUpperCase(param){
    if (typeof param === "string"){
        console.log(param.toUpperCase() + " proves that I am the rep MASTER!")
    }
}

// mixer
function repMaster (sentence, callback){
    callback(sentence)
}

// testing the callback function
repMaster("You like McSalad with McWrap", wordReverse);
repMaster("You like McSalad with McWrap", toUpperCase);









