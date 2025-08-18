const ApiError = require("../utils/ApiError");
const Position = require("../model/Position.Model.js");

const getAllPositions = async (req, res) => {
  try {
    const allPositions = await Position.find({});
    res.json(allPositions);
  } catch (error) {
    throw new ApiError(500, "Error in fetching all positions", error.message);
  }
};

module.exports = {
  getAllPositions,
};
