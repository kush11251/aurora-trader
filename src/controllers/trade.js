const express = require('express');
const router = express.Router();
const Trade = require('../models/trade');
router.get('/', async (req, res) => {
    const trades = await Trade.find();
    res.json(trades);
});
router.post('/', async (req, res) => {
    const trade = new Trade(req.body);
    await trade.save();
    res.json(trade);
});
module.exports = router;