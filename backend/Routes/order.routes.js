const router = require("express").Router();
const { allorder, newOrder } = require("../controllers/order.controller.js");

router.route("/allorders").get(allorder).post(newOrder);

module.exports = router;
