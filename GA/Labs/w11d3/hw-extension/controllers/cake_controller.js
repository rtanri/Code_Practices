// const { cakes, Baked } = require('../models/biscuit.js');
const { CakeModel } = require('../models/biscuit');
const _ = require('lodash');

module.exports = {
    homepage: (req, res) => {
        res.render('bakery/homepage');
    },

    index: async (req, res) => {
        let cakes = [];
        try {
            cakes = await CakeModel.find();
        } catch (err) {
            res.statusCode(500);
            return 'Server error 500';
        }
        res.render('bakery/index', {
            cakes: cakes
        });
    },

    show: (req, res) => {
        // find 1 item instead of array with slug searched
        CakeModel.findOne({ slug: req.params.slug }).then(item => {
            console.log('success');
            console.log(item);
            // if item is not found, redirect home
            if (!item) {
                res.redirect('/bakery');
            }
            res.render('bakery/show', {
                cake: item,
                cakeIndex: req.params.slug
            }).catch(err => {
                console.log(err);
                res.redirect('/bakery');
            });
        });
    },
    new: (req, res) => {
        res.render('bakery/new');
    },
    create: (req, res) => {
        let slug = _.kebabCase(req.body.name);

        CakeModel.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            slug: slug
        })
            .then(createResp => {
                res.redirect('/bakery');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/bakery/new');
            });
    },
    edit: (req, res) => {
        CakeModel.findOne({ slug: req.params.slug })
            .then(item => {
                res.render('bakery/edit', {
                    cakes: item,
                    cakeIndex: req.params.slug
                });
            })
            .catch(err => {
                res.redirect('/bakery');
            });
    },
    update: (req, res) => {
        let newSlug = _.kebabCase(req.body.name);

        CakeModel.updateOne(
            { slug: req.params.slug },
            {
                $set: {
                    name: req.body.name,
                    price: req.body.price,
                    image: req.body.image,
                    slug: newSlug
                }
            }
        )
            .then(updateResp => {
                res.redirect('/bakery/' + newSlug);
            })
            .catch(err => {
                res.redirect('/bakery/' + req.params.slug + '/edit');
            });
    },
    delete: (req, res) => {
        CakeModel.deleteOne({ slug: req.params.slug })
            .then(deleteResp => {
                res.redirect('/bakery');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/bakery');
            });
    }
};

// =======================================
//     Previous EJS Express Code
// =======================================

// module.exports = {
//     homepage: (req, res) => {
//         res.render('bakery/homepage');
//     },

//     index: (req, res) => {
//         res.render('bakery/index', { cakes });
//     },

//     show: (req, res) => {
//         res.render('bakery/show', {
//             cake: cakes[req.params.id],
//             cakeIndex: req.params.id
//         });
//     },
//     new: (req, res) => {
//         res.render('bakery/new');
//     },
//     create: (req, res) => {
//         console.log(req.body);
//         const newEntry = new Baked(
//             req.body.name,
//             req.body.price,
//             req.body.image
//         );
//         cakes.push(newEntry);
//         // it didn't render new page, so we open existing page with redirect('/bakery')
//         res.redirect('/bakery');
//     },
//     edit: (req, res) => {
//         res.render('bakery/edit', {
//             cakes: cakes[req.params.id],
//             cakeIndex: req.params.id
//         });
//     },
//     update: (req, res) => {
//         cakes[req.params.id].name = req.body.name;
//         cakes[req.params.id].price = req.body.price;
//         cakes[req.params.id].image = req.body.image;

//         res.redirect('/bakery/' + req.params.id);
//     },
//     delete: (req, res) => {
//         cakes.splice(req.params.id, 1);
//         res.redirect('/bakery');
//     }
// };
