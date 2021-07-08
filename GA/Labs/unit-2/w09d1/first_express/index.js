const express = require('express')
const app = express() // utilize express library to create application
const port = 3000 // specify what localhost port you want to use

// specify the route 
app.get('/', (req, res) => {
        res.send('Hello Burger!') //send response hellow world when hit 'url'
})

app.get('/jon', (req, res) => {
        res.send('Jon') // diff route
})

app.get('/chelsea', (req, res) => {
        res.send('chelsea')
})

app.get('/minshan', (req, res) => {
        res.send('minshan')
})

// initialize the response
app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})