const Holding = require("../model/Holding.Model.js");
const ApiError = require("../utils/ApiError.js");

const allholdings = async (req, res) => {
  try {
    let allholdings = await Holding.find({});
    console.log(allholdings);
    res.json(allholdings);
  } catch (error) {
    throw new ApiError(500, "Error in fetching all holdings", error.message);
  }
};

module.exports = {
  allholdings,
};
