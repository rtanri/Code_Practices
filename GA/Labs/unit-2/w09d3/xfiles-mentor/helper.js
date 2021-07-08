/* ============ Part 1 & Bonus ============== */

const sightingsData = require("./sightings.json");

/* Sample input:
node helper.js shape=sphere
node helper.js city=Sherwood
Expected output: Sightings where the state property = "SC"
 */

//1. Get the inputs ("state=SC", "city=Sherwood")

const input = process.argv[2]; // "state=SC"

//2. Use that input , extract the value "SC" and assign a variable called valueQuery
//2a. Extract the value "state", "city", "shape"

const valueQuery = extractValue(input); // SC, Sherwood
const paramQuery = extractParam(input); //city, shape

/*
 {
    "date": "1/31/15 21:30",
    "city": "Conway",
    "state": "SC",
    "shape": "Fireball",
    "duration": "5 minutes",
    "description": "9 bright orange fireballs falling to the ground from the sky...",
  },
*/

// 3. Find all items in the sightingsData array where the item[paramQuery] === valueQuery

const results = sightingsData.filter(
        item => item[paramQuery].toLowerCase() === valueQuery.toLowerCase()
);

results.forEach(formatResults);

// Sample input: "state=SC"
// Expected output: "SC"
function extractValue(str) {
        return str.split("=")[1];
}

// Sample input: "state=SC", "city=Sherwood"
// Expected output: "state", "city"
function extractParam(str) {
        return str.split("=")[0];
}

/*
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

/* ============ Part 1 Ended ============== */