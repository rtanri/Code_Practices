/* ============= JS Object Advance ============== */


// // 1. Variable as Object Key
//     // Square bracket = used when the key didn't use a usual attribute

//     // Example: let authedUser = Maria
//     // you can easily set in user array object to find 'Maria': the user[authedUser].age 

// const monster =  {
// 	name: 'Slimer',
// 	age: 6,
//     'my-name': "John"
// }

// const someVar = 'name';

// console.log(monster[someVar]);  // same as monster['name'];
// // console.log(monster.someVar);  //give you undefined
// console.log(monster["my-name"]); // John




// // 2. For-in LOOP: Looping through Object Keys/Attributes

// const movie = {
//     title: "L'Avventura",
//     director: "Michelangelo Antonioni",
//     year: 1960
//     }
    

// // 'key' is just a variable
// for (let key in movie) {
// // for (let yourKey in movie) { //it will show the same thing
//     console.log(key);
//     // console.log(yourKey); //it will show the same thing
//     console.log(movie[key]);
//     console.log("------");
// }

    
// // 3. Object.keys() returns an array of keys
    
// console.log(Object.keys(movie)) // to prints  [ 'title', 'director', 'year' ]

// let keyArr = Object.keys(movie)

// for (let i = 0; i < keyArr.length; i++){
//     console.log(keyArr[i]) //print the key
//     console.log(movie[keyArr[i]]); //print the value
//     console.log("------")
// }



/* ============= JS Callback ============== */


// // 4. callback primer - Anonymous Function

//     // 4.1.  imagine: ceramic plate (normal function) vs paper plate (anonymous function, 1x used then throw away)
//     // used in point of declaration , then that's it

//     // examples:
//     let arr = [1, 2, 3]

//     // Instead of using for-loop, we can also use forEach array method
//     // Notice the parameter we pass into forEach method is a nameless function

//     // // this is Anonymous Function - save your PC memory
//     arr.forEach(function(item) {
//         console.log(item)
//     });



//     // 4.2. Execute in the order that we want
//     // function to be executed, after some task has been performed

//     // e.g. Close all programes, THEN shut down the computer
    
//     // set in function as parameter
//     function shutdown(arrOfRunningPrograms, cutPowerCallbackFunction){
//         for ( let i = 0; i < arrOfRunningPrograms.length; i++){
//             console.log("Closing programme: " + arrOfRunningPrograms[i]);
//         }
//         cutPowerCallbackFunction()
//     }

//     // parameter: [...currentRunningProgram] and 'callback function'
//     // shutdown(  ["Word", "VSCode"], () => {console.log("Cutting off power")}  )
//     shutdown(["Word", "VSCode"], () => {
//         console.log("Cutting off power")
//     })

//     shutdown(["Instagram", "Chrome"], () => {
//         console.log("Restart")
//     })



//     // 4.3. Why we want to use Callback?
//         // JS is event driven language; does not wait for the response;
//         // instead our functions can look for events

    
//     function first(){
//         // Simulate a code delay
//         setTimeout( function(){
//             console.log(1);
//         }, 500 );
//         ;
//       }

//     function second(){
//     console.log(2);
//     }

//     // with timeout in first() - these prints 2, then 1
//     // this usually happend when you require time to get data from database, and then show your Front-End
//     // this will cause error if Front-end work faster, compare to database arrived
//     first(); // 1 - delayed 1 second
//     second(); // 2



//         // Correction with callback
//         const events = require('events');
//         let eventEmitter = new events.EventEmitter();
        
//         function first(){
//             // Simulate a code delay
//             setTimeout( function(){
//               console.log(1);
//               eventEmitter.emit('doneFirst');
//             }, 1500 );
//         }
        
//         function second(){
//             console.log(2);
//         }
        
//         // this 'callback' is parameter name
//         function printFirstThenSecond(callback) {
//             first()
//             eventEmitter.on('doneFirst', callback);
//             // with 'doneFirst' in eventEmitter is waiting the previous task finished being executed, then continue next function
//         }
        
//         printFirstThenSecond(second)
        


//     // 4.4. Flexibility to define different tasks to be run in function
    
//     function makeTea(callback) {
//         // Standard tasks for all tea:
//         console.log("boil water");
//         console.log("prepare cup");
        
//         // custom tasks using callback
//         // eg. making Pu-er tea vs. making brown sugar milk tea
//         callback();
//     }

//     function makePuerTea(){
//         console.log("infuse with tea")
//     }

//     makeTea(makePuerTea);



/* ============= JS Array Method ============== */



const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

// findIndex()
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

const isLargeNumber = (element) => element > 300;
const exactWord = (element) => element === "CSS";

// testing
console.log("More than 300, index: "+ numberArray.findIndex(isLargeNumber));
console.log("Exact CSS, index: "+ classArray.findIndex(exactWord));


// Reducer

const euros = [1,2,3,4,5];

const sum = euros.reduce((total, amount,index,array) => array); 
console.log(sum)

