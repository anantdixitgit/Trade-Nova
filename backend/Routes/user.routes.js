const router = require("express").Router();
const verifyJWT = require("../Middlewares/verifyUser.middleware.js");
const {
  signup,
  login,
  logout,
  verifyUser,
} = require("../controllers/user.controller.js");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/verify").get(verifyJWT, verifyUser);

module.exports = router;
