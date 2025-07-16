const products = require("../models/productModel");

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

module.exports = {
  getAllProducts
};
