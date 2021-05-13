const heroes = require('../models/superheroes')

const handlers = {

        index: (req, res) => {
                let heroesHtml = ''

                heroes.forEach(h => {
                        heroesHtml += '<li>' + h + '</li>'
                })

                // no need to put VIEW folder
                res.render('superheroes/index', {
                        pageTitle: 'Hello McSpicy',
                        heroes: heroes
                })
        },

        show: (req, res) => {
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
        }

}

module.exports = handlers