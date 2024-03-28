const express = require('express');
const router = express.Router();
const { postAddProduct } = require('../controllers/adminController');

router.post('/add-product', postAddProduct);



module.exports = router;
