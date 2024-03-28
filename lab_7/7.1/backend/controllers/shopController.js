const Product = require('../models/productModel');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.json(products);
  });
};