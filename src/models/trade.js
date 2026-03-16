const mongoose = require('mongoose');
const tradeSchema = new mongoose.Schema({
    symbol: String,
    quantity: Number,
    price: Number
});
module.exports = mongoose.model('Trade', tradeSchema);