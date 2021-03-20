// // few notes in Notebook page 25.

// //to delete the folder in git:
// // $ rf -rm <folder name>

// // FOR loops - you know exactly how many times you want to run the loop
// // WHILE loops = you don't know how many times to run

// // WHILE loops - rmb to declare the 'counter' variable outside the loop

// // template literal
//     console.log("Current loop number is: " + counter2)
//     console.log (`Current loop number is: ${counter2}`) 
//     // benefits: if you have multiple sentence to combine, you don't need to keep using ""
//     console.log(`${test1} ${test2} ${test3}.`)

// // Array and Data Structure
//     // Most suitable with FOR loops
//     // forEach Method
//     let studentEmails = ["email1", "email2", "email3"]

//     studentEmails.forEach(function(item){
//         // 
//     })


    // // multi dimentional array
    // let studentEmails = [
    //     ["email1", "email2", "email3"],
    //     ["gmail1", "gmail2", "gmail3"]
    // ]; //2-by-3 arrays

    // let count = 0;
    // for (let row = 0; row < studentEmails.length; row++){
    //     console.log("Accessing row: "+ row)
    //     for (let col = 0; col < studentEmails[row].length; col++){
    //         console.log("Accessing: "+ studentEmails[row][col]);
    //         count++

    //     }
    // }
    // console.log(count);


// HOW WEBSITE WORKS
    // 1. google.com goes to DOMAIN NAME SERVERS (DNS). translate the event to machine logs. 
    // What is the IP address for google.com? 74.125.200.139

    // 2. Client = the one who make a request. 
    // google.com is a client

    // 3. Server = responding by the request.
    // gather HTML, CSS, JS, Database




/* ========================= Week 2 ============================== */ 


// 1. Scope
// VAR always change the global paramater
// Let only change within the IF, FOR loops (Locally)


    // function varTest() {
    //     var x = 1;
    //     if (x === 1) {
    //       let x = 2;  // same variable!
    //       console.log(x);  // 2
    //     }

    //     // function-scope: all variable declared will be in function
    //     function varValue(){
    //       let x = 10
    //     }
    //     varValue();

    //     console.log(x);  // 1
    //   }
    // console.log("Result of varTest: ");
    // varTest();

    // function varTest2() {
    //   var x = 1;
    //   if (x === 1) {
    //     var x = 2;  // same variable!
    //     console.log(x);  // 2
    //   }
    //   console.log(x);  // 1
    // }
    // console.log("Result of varTest2: ");
    // varTest2()

    // function letTest() {
    //   let x = 1;
    //   if (x === 1) {
    //     let x = 2;  // different variable
    //     console.log(x);  // 2
    //   }
    //   console.log(x);  // 1
    // }

    // console.log("Result of letTest: ");
    // letTest();


// 2. Variable Reference (Reference = address in RAM)
    // when variable is declared. In RAM, an empty memory space will be found, 
    // location reference (address of that memory space) will belongs to that variable

    //  arrays and object are passed around by reference
    // but primitive types (number, string, boolean) are passed ard by duplicate/copy.
    // modifying the duplicate copy will not passed around the original variable
    // modifying the passed reference will mutate the original

// 3. CSS
    // Concept: seperation of concern
    // seperate HTML CSS and JS. Encapsulate HTML in HTML File, CSS in CSS file

    // Concept: Cascading in CSS
    // the most below code will be executed

    // $open index.html (to open in browser)

    // Wire-framing: draw the draft and sections of webpage.
    
    // macbook: Digital Color Meter - to check the color on the screen

    // Always - edit the parents styling first (margin, padding) then goes to child
    // Margin - tends to move the position of the THING.
    // Padding - tends to shrink/enlarge of the THING

    // background picture
    // background-position: cover;
    // background-position: contain;
    // background-repeat: no repeat;
    // background-position: center;

    // width: calc(50% - 15px);


// 4. FLOAT + clear fix / clear float
    // when you use FLOAT, there is undesirable behavior - it will ignore the parents element.
    // google: .clearfix and put the class in the parent container

// 