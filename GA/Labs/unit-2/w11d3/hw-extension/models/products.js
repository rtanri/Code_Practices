const mongoose = require("mongoose");

// create Schema
const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, require: true },
});

// create Model (e.g. Cake -> cakes) which will become collections in smallcase+plurals
const ProductModel = mongoose.model("Product", productSchema);

// with mongoose, we will catch this data from the database
module.exports = {
  ProductModel: ProductModel,
};

/* ============ Before using Mongoose ============== */

// class Baked {
//     constructor(name, price, image, index) {
//         (this.name = name),
//             (this.price = price),
//             (this.image = image),
//             (this.id = index);
//     }
// }

// module.exports = {
//     cakes: bakedGoods.map(
//         (element, index) =>
//             new Baked(element.name, element.price, element.image, index)
//     ),
//     Baked
// };

// let bakedGoods = [
//     {
//         name: 'Biscoff Spready Gooey Butter Cake',
//         price: 25,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b3e2500003300360ed3.png'
//     },
//     {
//         name: 'Biscoff Brownie Cake',
//         price: 35,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b3f2200005600d93aba.jpeg'
//     },
//     {
//         name: 'Biscoff and Kahlua Crunch Cupcakes',
//         price: 15,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b402000003000fd8fc7.jpeg'
//     },
//     {
//         name: 'Chocolate Biscoff Whoopie Pies',
//         price: 10,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b401f000050002135eb.jpeg'
//     },
//     {
//         name: 'Biscoff Banana Muffins',
//         price: 5,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b42240000300094aad3.jpeg'
//     },
//     {
//         name: 'Biscoff Pumpkin Cheesecake',
//         price: 20,
//         image:
//             'https://img.huffingtonpost.com/asset/5b9c6b431f000050002135f0.jpeg'
//     }
// ],
