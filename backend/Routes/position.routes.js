//getting positions data from server
const router = require("express").Router();
const { getAllPositions } = require("../controllers/position.controller.js");

router.route("/allpositions").get(getAllPositions);

module.exports = router;
