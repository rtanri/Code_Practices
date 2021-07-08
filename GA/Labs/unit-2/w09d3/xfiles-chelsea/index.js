/* Accept HTTP requests
Get the query from the request URL 
Filter the sightings according to queries
Send back the result
*/
const sightingsData = require('./sightings.json');
const express = require('express');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

// Sample URL: /sightings?shape=sphere&city=henderson&state=nv
app.get('/sightings', (req, res) => {
    let results = sightingsData;
    for (const key in req.query) {
        results = results.filter(
            (sighting) =>
            sighting[key].toLowerCase() === req.query[key].toLowerCase()
        );
    }
    res.render('index', {
        results
    }); // { results } is the same as { results: results } // { pageTitle: "X-Files", results } is the same as { pageTitle: "X-Files", results: results }
});

app.get('/', (req, res) => {
    res.render('welcome'); // { results } is the same as { results: results } // { pageTitle: "X-Files", results } is the same as { pageTitle: "X-Files", results: results }
});

app.listen(PORT, () => {
    console.log('App has started on port', PORT);
});