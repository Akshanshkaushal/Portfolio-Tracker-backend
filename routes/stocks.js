const express = require('express');
const { fetchStocks } = require('../controllers/stockController');

const router = express.Router();

router.get('/', fetchStocks);

module.exports = router;
