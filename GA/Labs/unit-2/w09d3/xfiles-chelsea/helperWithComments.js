const sightingsData = require('./sightings.json');
const operatorsReference = {
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b,
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
    '=': (a, b) => a === b,
    dateEquality: (a, b) => a.getTime() === b.getTime()
};

const input = process.argv[2];

/*
Example of queries: [{param: 'state', value: 'SC', operator: '='}, {param: 'date', value: '12/24/15', operator: '<'}]
queries would be an array of our formatted queries
 */
const queries = extractQueries(input); //only 1 input

if (!queries.length) {
    console.log('No queries found.');
    process.exit();
}

let results = sightingsData;
queries.forEach((query) => {
    results = results.filter((sighting) => filterSightings(query, sighting));
});

if (!results.length) {
    console.log('No results found.');
}

results.forEach(formatResult);

/* ===================
HELPER FUNCTIONS
==================== */

function filterSightings(query, sighting) {
    const {
        param,
        value,
        operator
    } = query;
    /* the above operation is called object destructuring, and is equivalent to:
	const param = query.param
	const value = query.value
	const operator = query.operator
	*/

    let comparisonFunction = operatorsReference[operator];
    // OperatorsReference is a helper object that tells us which comparison we do
    // if operator = "="
    // operatorsReference["="] would give us the function(a,b) { return a === b }

    if (param === 'date') {
        const itemDate = extractDate(sighting.date);
        const queryDate = extractDate(value);

        // If we are comparing equality of dates, we need to use a different function that compares the values of date.getTime
        if (operator === '=')
            comparisonFunction = operatorsReference.dateEquality;

        return comparisonFunction(itemDate, queryDate);
    }

    return comparisonFunction(
        sighting[param].toLowerCase(),
        value.toLowerCase()
    );
}

/*
Sample input: "12/24/15" (MM/DD/YY format) or "12/24/2015" (MM/DD/YYYY format)
Sample output: an accurate JavaScript date object
*/
function extractDate(dateString) {
    const dateOnlyString = dateString.split(' ')[0];
    const [month, day, year] = dateOnlyString.split('/');

    /*
	const [month, day, year] = dateOnlyString.split("/") is equivalent to:
	const values = dateString.split("/") // [12, 24, 15]
	const month = values[0] // 12
	const day = values[1] // 24
	const year = values[2] // 15
	*/

    let formattedYear = year.length !== 4 ? `20${year}` : year;
    // To deal with the case where year is YYYY instead of YY)

    return new Date(formattedYear, month - 1, day);
}

/*
Sample input: "state=SC&date<12/24/15"
Expected output: [{param: 'state', value: 'SC', operator: '='}, {param: 'date', value: '12/24/15', operator: '<'}]
*/

function extractQueries(str) {
    const queries = str.split('&');
    return queries.map((query) => {
        const operator = getOperator(query);
        if (!operator) {
            console.log('Invalid operator/query found. Please try again.');
            process.exit();
        }
        return {
            param: getParam(query, operator),
            value: getValue(query, operator),
            operator
        };
    });
}

/* Sample input: "city=ada", "date<12/12/15"
Expected output: "city", "date"
*/
function getParam(str, operator) {
    return str.split(operator)[0];
}

/* Sample input: "city=ada", "date<12/12/15"
Expected output: "ada", "12/12/15"
*/
function getValue(str, operator) {
    return str.split(operator)[1];
}

/* Sample input: "city=ada", "date<12/12/15"
Expected output: "=", "<"
*/
function getOperator(str) {
    for (const char in operatorsReference) {
        if (str.includes(char)) return char;
    }
}

function formatResult(obj) {
    console.log(`=====================`);
    console.log(`Date: ${obj.date}`);
    console.log(`City: ${obj.city}`);
    console.log(`State: ${obj.state}`);
    console.log(`Shape: ${obj.shape}`);
    console.log(`Duration: ${obj.duration}`);
}