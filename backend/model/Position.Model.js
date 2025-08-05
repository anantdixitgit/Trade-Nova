const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Positon = new mongoose.model("Position", positionSchema);

module.exports = Positon;
