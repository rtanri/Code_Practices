/* ============ Part 1 & Bonus ============== */

const sightingsData = require('./models/sightings.json')


//1. Get the input ("state=SC")
const input = process.argv[2]; // "state=SC"
console.log()

//2. Use that input , extract the value "SC" and assign a variable called stateQuery
//2a. Extract the value "state", "city", "shape"
const stateQuery = extractValue(input);

// 3. Find all items in the sightingsData array where the state === stateQuery
const results = sightingsData.filter(item => item.state === stateQuery);

results.forEach(formatResults);

// Sample input: "state=SC"
// Expected output: "SC"
function extractValue(str) {
        return str.split("=")[1];
}

/* MAKE THIS FORMAT
=====================
Date: 1/31/15/ 21:30
City: Conway
State: SC
Shape: Fireball
Duration: 5 Minutes
====================
Date: 1/27/15 20:00
City: Myrtle Beach
State: SC
Shape: Changing
Duration: 10 Seconds
====================
*/

function formatResults(sightingObject) {
        console.log(`=====================`);
        console.log(`Date: ${sightingObject.date}`);
        console.log(`City: ${sightingObject.city}`);
        console.log(`State: ${sightingObject.state}`);
        console.log(`Shape: ${sightingObject.shape}`);
        console.log(`Duration: ${sightingObject.duration}`);
}


// for (const data of sightingsData) {
//         switch (customKey) {
//                 case "date":
//                         if (data.date === value) {
//                                 dataArray.push(data)
//                         }
//                         break;
//                 case "city":
//                         if (data.city === value) {
//                                 dataArray.push(data)
//                         }
//                         break;
//                 case "state":
//                         if (data.state === value) {
//                                 dataArray.push(data)
//                         }
//                         break;
//                 case "shape":
//                         if (data.shape === value) {
//                                 dataArray.push(data)
//                         }
//                         break;
//                 case "duration":
//                         if (data.duration === value) {
//                                 dataArray.push(data)
//                         }
//                         break;
//                 case "description":
//                         if (data.description.includes(value)) {
//                                 dataArray.push(data)
//                         }
//                         break;
//         }
// }
// console.log(dataArray)
/* ============ Part 1 Ended ============== */


// /* ============ Part 2 Start ============== */
// const sightingsData = require('./models/sightings.json')

// const express = require('express')
// const app = express()
// const port = 3000
// let dataArray = []

// let checkingValue = {
//         state: "",
//         city: "",
//         shape: "",
//         date: "",
// }

// function selectSearchedKey() {
//         if (checkingValue.state.value != "") {
//                 console.log(checkingValue.child)
//         }
// }

// app.get("/sightings", (req, res) => {
//         checkingValue.state = req.query.state
//         checkingValue.city = req.query.city
//         checkingValue.shape = req.query.shape
//         checkingValue.date = req.query.date

//         // selectSearchedKey()

//         let filteredValue = sightingsData.filter(function (data) {
//                 return data.state === checkingValue.state &&
//                         data.shape === checkingValue.shape
//                 // && data.city === checkingValue.city
//         })
//         res.send(filteredValue)
// });


// app.listen(port, () => {
//         console.log(`Example app listening at http://localhost:${port}`)
// })