const router = require("express").Router();
const { allholdings } = require("../controllers/holding.controller.js");

router.route("/allholdings").get(allholdings);

module.exports = router;
