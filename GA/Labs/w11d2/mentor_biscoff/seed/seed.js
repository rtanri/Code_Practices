const mongoose = require("mongoose");
const _ = require("lodash");
const { BakedGoodModel } = require("../models/bakedgoods");

const mongoURI = "mongodb://localhost:27017/biscoff_bakery";
let data = [
  {
    name: "Biscoff Spready Gooey Butter Cake",
    price: 25,
    image: "https://img.huffingtonpost.com/asset/5b9c6b3e2500003300360ed3.png",
  },
  {
    name: "Biscoff Brownie Cake",
    price: 35,
    image: "https://img.huffingtonpost.com/asset/5b9c6b3f2200005600d93aba.jpeg",
  },
  {
    name: "Biscoff and Kahlua Crunch Cupcakes",
    price: 15,
    image: "https://img.huffingtonpost.com/asset/5b9c6b402000003000fd8fc7.jpeg",
  },
  {
    name: "Chocolate Biscoff Whoopie Pies",
    price: 10,
    image: "https://img.huffingtonpost.com/asset/5b9c6b401f000050002135eb.jpeg",
  },
  {
    name: "Biscoff Banana Muffins",
    price: 5,
    image: "https://img.huffingtonpost.com/asset/5b9c6b42240000300094aad3.jpeg",
  },
  {
    name: "Biscoff Pumpkin Cheesecake",
    price: 20,
    image: "https://img.huffingtonpost.com/asset/5b9c6b431f000050002135f0.jpeg",
  },
];

data = data.map(item => {
  item.slug = _.kebabCase(item.name);
  return item;
});

let connection = null;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connResp => {
    connection = connResp;
    return BakedGoodModel.insertMany(data);
  })
  .then(insertResp => {
    console.log("successful data insertion");
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    if (connection !== null) {
      connection.disconnect();
    }
  });
