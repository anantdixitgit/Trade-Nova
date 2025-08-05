const { Schema, model } = require("mongoose");

const HoldingSchema = new Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },

  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
});

const Holding = model("Holding", HoldingSchema);
module.exports = Holding;
