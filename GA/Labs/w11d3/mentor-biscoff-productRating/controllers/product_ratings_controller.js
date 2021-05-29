const _ = require('lodash')
const {ProductModel} = require('../models/products')
const {ProductRatingModel} = require('../models/product_ratings')

module.exports = {

    newForm: (req, res) => {
        res.render('product-ratings/new', {
            productSlug: req.params.slug
        })
    },

    create: (req, res) => {
        // validate rating is not empty

        let rating = Number(req.body.rating)

        // retrieve product based on slug from db
        ProductModel.findOne({ slug: req.params.slug })
            .then(productResp => {
                if (!productResp) {
                    res.redirect('/products')
                    return
                }

                console.log(productResp)

                return ProductRatingModel.create({
                    product_id: productResp._id,
                    rating: rating,
                    comment: req.body.comment
                })
            })
            .then(createRatingResp => {
                res.redirect('/products/' + req.params.slug)
                return
            })
            .catch(err => {
                console.log(err)
                res.redirect('/products')
            })
    }

}