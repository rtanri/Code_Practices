const express = require("express");
const sightingsData = require("./sightings.json");
const app = express();

app.set("view engine", "ejs");

const PORT = 3000;

// app.get("/sightings", (req, res) => {
//         console.log("req.query", req.query); //req.query { state: 'SC', shape: 'Sphere' }
//         res.send(sightingsData);
// });

// sightings?state=SC
app.get("/sightings", (req, res) => {
        const queries = req.query;
        let results = sightingsData;
        for (key in queries) {
                results = results.filter(item => {
                        if (key === "date") {
                                const queryDate = extractDate(req.query.date);
                                const sightingDate = extractDate(item.date);
                                return queryDate.getTime() === sightingDate.getTime();
                        }
                        return item[key] === req.query[key];
                });
        }
        res.render("main", {
                results
        });
});

app.listen(PORT, () => {
        console.log("X-files app has started running at port", PORT);
});

// Sample input: "1/31/15 22:00"
function extractDate(dateString) {
        const extractedStr = dateString.split(" ")[0]; //1/31/15 -> mm/dd/yy

        const dateValues = extractedStr.split("/");

        const monthIndex = dateValues[0] - 1;
        const day = dateValues[1];
        const year = dateValues[2];

        return new Date(year, monthIndex, day);
}


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