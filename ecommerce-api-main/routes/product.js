// routes/product.js

const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/list', async (req, res) => {
  try {
    // Fetch paginated list of products
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const products = await Product.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
