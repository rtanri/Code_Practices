const express = require('express')
const heroesController = require('./controllers/superheroes_controller')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// Index route: returns a list of all the resources (superheroes)
app.get('/superheroes', heroesController.index)

// Show route: return the specific resource
app.get('/superheroes/:id', heroesController.show)

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})