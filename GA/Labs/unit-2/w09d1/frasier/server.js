const express = require('express')
const app = express()
const port = 4000

// app.get('/', callback)
app.get('/', (req, res) => {
        res.send("Hello, Seattle. I'm listening...")
})

app.get('/frasier', (req, res) => {
        res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'")
})

app.listen(port, () => {
        console.log(`Seattle app listening at http://localhost:${port}`)
})