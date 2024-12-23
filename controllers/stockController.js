const axios = require('axios');
require('dotenv').config();

const ALPHAVANTAGE_API_URL = 'https://www.alphavantage.co/query';
const API_KEY = process.env.ALPHAVANTAGE_API_KEY;

exports.fetchStocks = async (req, res) => {
  try {
    const response = await axios.get(`${ALPHAVANTAGE_API_URL}?function=LISTING_STATUS&apikey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
};
