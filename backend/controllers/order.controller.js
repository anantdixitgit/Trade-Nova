const Order = require("../model/Order.Model.js");
const ApiError = require("../utils/ApiError.js");

const allorder = async (req, res) => {
  try {
    let allorders = await Order.find({});
    console.log(allorders);
    res.json(allorders);
  } catch (error) {
    throw new ApiError(500, "Erro in fetching all orders", error.message);
  }
};

const newOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ error: "please provide all required data" });
    process.exit(1);
  }
  try {
    const newOrder = new Order({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    throw new ApiError(500, "Error in creating new order", error.message);
  }
};

module.exports = {
  allorder,
  newOrder,
};
