const Portfolio = require('../models/Portfolio');

/**
 * @swagger
 * /portfolio:
 *   get:
 *     summary: Get all stocks in the portfolio
 *     description: Fetch all stocks from the portfolio.
 *     responses:
 *       200:
 *         description: A list of stocks in the portfolio
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   ticker:
 *                     type: string
 *                   quantity:
 *                     type: integer
 *                   buyPrice:
 *                     type: number
 *                     format: float
 *       500:
 *         description: Failed to fetch portfolio
 */
exports.getPortfolio = async (req, res) => {
  try {
    const stocks = await Portfolio.getAllStocks();
    res.json(stocks);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ error: `Failed to fetch portfolio: ${error.message}` });
  }
};

/**
 * @swagger
 * /portfolio:
 *   post:
 *     summary: Add a stock to the portfolio
 *     description: Add a new stock to the portfolio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ticker:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               buyPrice:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Stock added successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to add stock
 */
exports.addStock = async (req, res) => {
  try {
    const stock = req.body;
    if (!stock.name || !stock.ticker || !stock.quantity || !stock.buyPrice) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    console.log('Attempting to add stock:', stock);
    await Portfolio.addStock(stock);
    res.status(201).json({ message: 'Stock added successfully' });
  } catch (error) {
    console.error('Error adding stock:', error);
    res.status(500).json({ error: `Failed to add stock: ${error.message}` });
  }
};

/**
 * @swagger
 * /portfolio:
 *   put:
 *     summary: Update a stock in the portfolio
 *     description: Update the details of an existing stock in the portfolio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               buyPrice:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Stock updated successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to update stock
 */
exports.updateStock = async (req, res) => {
  try {
    const stock = req.body;
    if (!stock.id || !stock.quantity || !stock.buyPrice) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    await Portfolio.updateStock(stock);
    res.json({ message: 'Stock updated successfully' });
  } catch (error) {
    console.error('Error updating stock:', error);
    res.status(500).json({ error: `Failed to update stock: ${error.message}` });
  }
};

/**
 * @swagger
 * /portfolio/{id}:
 *   delete:
 *     summary: Delete a stock from the portfolio
 *     description: Remove a stock from the portfolio by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stock to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Stock deleted successfully
 *       400:
 *         description: Stock ID is required
 *       500:
 *         description: Failed to delete stock
 */
exports.deleteStock = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Stock ID is required' });
    }
    
    await Portfolio.deleteStock(id);
    res.json({ message: 'Stock deleted successfully' });
  } catch (error) {
    console.error('Error deleting stock:', error);
    res.status(500).json({ error: `Failed to delete stock: ${error.message}` });
  }
};
