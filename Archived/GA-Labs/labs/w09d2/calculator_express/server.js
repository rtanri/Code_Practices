const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route param example
app.get('/calc/:num1/:num2', (req, res) => {
    console.log(req.params)

    // parse the string to a number
    let firstNum = parseInt(req.params.num1, 10)
    let secondNum = parseInt(req.params.num2, 10)

    let result = firstNum + secondNum
    result = result + ""

    res.send(result)
})

// query param example
app.get('/calc/query', (req, res) => {
    console.log(req.query)

    // parse the string to a number
    let firstNum = parseInt(req.query.num1, 10)
    let secondNum = parseInt(req.query.num2, 10)

    let result = firstNum + secondNum
    result = result + ""

    res.send(result)
})

// using both query and route params
app.get('/calcquery/:num1/:num2', (req, res) => {

    // parse the string to a number
    let firstNum = parseInt(req.params.num1, 10)
    let secondNum = parseInt(req.params.num2, 10)

    if (isNaN(firstNum) || isNaN(secondNum)) {
        res.send('please enter a numerical number')
        return
    }

    // get the operation
    let op = req.query.operation

    let result = ""

	// based on the query param "operation", do either add/sub/mul/div
    switch(op) {
        case 'add':
            result = firstNum + secondNum
            break
        case 'sub':
            result = firstNum - secondNum
            break
        case 'mul':
            result = firstNum * secondNum
            break
        case 'div':
            result = firstNum / secondNum
            break
        default:
            res.send("please enter a valid operation")
            return
    }

    result = result.toString()

    res.send(result)
})

// ROUTE ORDER MATTERS
app.get('/users/login', (req, res) => {
    res.send("Holy Moly, Moly is Holy")
})

app.get('/users/:username', (req, res) => {
    res.send(req.params.username)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
