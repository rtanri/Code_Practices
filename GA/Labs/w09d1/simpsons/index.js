const express = require('express')
const app = express()
const port = 3000

app.get('/Homer', (req, res) => {
        res.send('Hello Homer, do you want a donut?')
})

// route param - http://localhost:3000/users/minshan/12
app.get('/users/:username/:age', (req, res) => {
        res.send(`Hello ${req.params.username}, you are ${req.params.age}`)
})

// query param
app.get('/users/:username/:age', (req, res) => {
        res.send(`Hello ${req.params.username}, you are ${req.params.age}`)
})


app.get('/snowball-ii', (req, res) => {
        res.send('woof woof, come here snowball')
})

app.get('/home', (req, res) => {
        res.send(`
        <html>
        <body>
            <h1>Oh ha!</h1>
        </body>
    </html>
        `)
})

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})