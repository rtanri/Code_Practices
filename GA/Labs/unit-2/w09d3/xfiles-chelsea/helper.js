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
const queries = extractQueries(input);

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
    let comparisonFunction = operatorsReference[operator];

    if (param === 'date') {
        const itemDate = extractDate(sighting.date);
        const queryDate = extractDate(value);

        if (operator === '=') {
            comparisonFunction = operatorsReference.dateEquality;
        }
        return comparisonFunction(itemDate, queryDate);
    }
    return comparisonFunction(
        sighting[param].toLowerCase(),
        value.toLowerCase()
    );
    ƒ
}

function extractDate(dateString) {
    const dateOnlyString = dateString.split(' ')[0];
    const [month, day, year] = dateOnlyString.split('/');
    let formattedYear = year.length !== 4 ? `20${year}` : year;
    return new Date(formattedYear, month - 1, day);

}

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

function getParam(str, operator) {
    return str.split(operator)[0];
}

function getValue(str, operator) {
    return str.split(operator)[1];
}

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