const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: String,
  },
  mode: {
    type: String,
  },
});

const Order = new mongoose.model("Order", OrderSchema);

module.exports = Order;
