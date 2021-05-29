const _ = require('lodash')
const {ProductModel} = require('../models/products')

module.exports = {

    index: async (req, res) => {
        let products = []

        try {
            products = await ProductModel.find()
        } catch (err) {
            res.statusCode(500)
            return 'server error'
        }

        res.render('products/index', {
            products: products,
        })
    },

    newForm: (req, res) => {
        res.render('products/new')
    },

    show: (req, res) => {
        ProductModel.findOne({ slug: req.params.slug })
            .then(item => {
                // if item is not found, redirect to homepage
                if (!item) {
                    res.redirect('/products')
                    return
                }

                res.render('products/show', {
                    product: item,
                })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/products')
            })
    },

    create: (req, res) => {
        // validate input here

        let slug = _.kebabCase(req.body.name)

        ProductModel.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            slug: slug
        })
            .then(createResp => {
                res.redirect('/products')
            })
            .catch(err => {
                console.log(err)
                res.redirect('/products/new')
            })
    },

    editForm: (req, res) => {
        ProductModel.findOne({ slug: req.params.slug })
            .then(item => {
                res.render('products/edit', {
                    product: item,
                })
            })
            .catch(err => {
                res.redirect('/products')
            })
    },

    update: (req, res) => {
        let newSlug = _.kebabCase(req.body.name)

        ProductModel.updateOne(
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
                res.redirect('/products/' + newSlug)
            })
            .catch(err => {
                res.redirect('/products/' + req.params.slug + '/show')
            })
    },

    delete: (req, res) => {
        ProductModel.deleteOne( { slug: req.params.slug } )
            .then(deleteResp => {
                res.redirect('/products')
            })
            .catch(err => {
                console.log(err)
                res.redirect('/products')
            })
    },

}