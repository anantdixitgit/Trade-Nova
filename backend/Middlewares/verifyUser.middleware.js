const ApiError = require("../utils/ApiError");
const User = require("../model/User.Model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyJWT = async (req, res, next) => {
  // Log cookies for debugging
  // console.log("Cookies received:", req.cookies);

  // console.log("Request headers:", req.headers);
  // console.log("Raw cookie header:", req.headers.cookie);

  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      isAuthenticated: false,
      message: "token not found, please login again",
    });
  }

  try {
    const decodedjwt = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedjwt.id).select("-password");
    if (!user) {
      return res.status(404).json({
        isAuthenticated: false,
        message: "user not found,please login again",
      });
    }

    console.log("user verified successfully:", user);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyJWT;
