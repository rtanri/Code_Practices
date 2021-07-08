const express = require('express')
const app = express()
const port = 3000
const heroes = ['Superman', 'Wonder Woman', 'Black Panther'] // #MODEL layer


// Index route: returns a list of all the resources (superheroes)
app.get('/superheroes', (req, res) => {
        res.send(heroes)
})

// Show route: return the specific resource
app.get('/superheroes/:id', (req, res) => {
        let id = parseInt(req.params.id)

        // validating if id is a number, return err msg is it is not
        if (isNaN(id)) {
                res.send("id must be a number")
                return
        }

        // validate if the id number given is valid
        if (id > heroes.length - 1 || id < 0) {
                res.send("id must be valid")
                return
        }

        res.send(heroes[req.params.id])
})


app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})