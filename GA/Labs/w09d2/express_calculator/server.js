const express = require('express')
const app = express()
const port = 3000

// app.get('/', callback)
app.get('/', (req, res) => {
        res.send("Hello world")
})

// Instructions
// Make a route in server.js that responds to the URI calc. Give the route two params, :num1 and :num2.

// mentor answer
// app.get('/calc/:num1/:num2', (req, res) => {
//         console.log(req.params)
//         res.send(`First num: ${req.params.num1}, Second Num: ${req.params.num2}`)
// })


// my first try
// req.params:{ "number1": "LAX", "to": "SFO" }
// app.get('/calc/:num1//:num2', function (req, res) {
//         res.send(`Hello ${req.params.num1} + ${req.params.num2}`)
// })



// Make it so that if the user enters:
// http://localhost:3000/calc/4/4 in the browser, the server send back a response of 8.
// req = request that coming in, res = responds that you use as response

//1. Route Parameter
app.get('/calc/:num1/:num2', (req, res) => {
        console.log(req.params)

        //parse the string to a number parseInt (string params, base)
        let firstNum = parseInt(req.params.num1, 10)
        let secondNum = parseInt(req.params.num2, 10)
        // let result = req.params.num1 + req.params.num2 // result type is string 4+5 = 45

        let result = firstNum + secondNum
        result = result + "" //to make everything become string
        res.send(result) // res.send("string only")
})

// 2. Query Parameter
app.get('/calc/query', (req, res) => {
        console.log(req.query)

        //parse the string to a number parseInt (string params, base)
        let firstNum = parseInt(req.query.num1, 10) // change to req.query
        let secondNum = parseInt(req.query.num2, 10)

        let result = firstNum + secondNum
        result = result + ""

        res.send(result) // http://localhost:3000/calc/query?num1=10&num2=100
})




app.get('/calcquery/:num1/:num2', (req, res) => {

        // 1.  parse the string
        let firstNum = parseInt(req.params.num1, 10)
        let secondNum = parseInt(req.params.num2, 10)

        // if (firstNum === NaN || secondNum === NaN) { // this NaN comparison is not allowed
        if (isNaN(firstNum) || isNaN(secondNum)) {
                res.send('please enter a numerical number')
                return
        }
        // get the operation
        let op = req.query.operation

        let result = ""
        //based on the query param "operations",  do either add/sub/mul/div
        switch (op) {
                case "add":
                        result = firstNum + secondNum
                        break
                        //http://localhost:3000/calcquery/10/50?operation=add
                case "sub":
                        result = firstNum - secondNum
                        break
                        //http://localhost:3000/calcquery/10/50?operation=sub
                case "mul":
                        result = firstNum * secondNum
                        break
                        //http://localhost:3000/calcquery/10/50?operation=mul
                case 'div':
                        result = firstNum / secondNum
                        break
                        //http://localhost:3000/calcquery/10/50?operation=div
                default:
                        res.send("please enter a valid operation")
                        return
        }
        result = result + ""
        res.send(result)
})

// ROUTE ORDER MATTERS
// most specific route to come first, then set the generic one after

// put /users/login on top because it prioritise the top route.
app.get('/users/login', (req, res) => {
        res.send("Holy Moly, Moly is Holy")
})

app.get('/users/:username', (req, res) => {
        res.send(req.params.username)
})




app.listen(port, () => {
        console.log('app is running on port: ', port)
})