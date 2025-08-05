const User = require("../model/User.Model");
const ApiError = require("../utils/ApiError");

//signup route

const signup = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !phone || !password) {
    throw new ApiError(400, "All fields are required for signup");
  }

  const newUser = new User({
    username,
    email,
    phone,
    password,
  });
  try {
    await newUser.save();
    const token = newUser.generateToken();
    res.status(201).json({
      message: "User created successfully",
      token: token,
      id: newUser._id,
    });
  } catch (error) {
    throw new ApiError(500, "Error in creating user:" + error.message);
  }
};

//login route

const login = async (req, res) => {
  console.log("login started");
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required for login");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "user not found");
  }
  const isPasswordValid = await user.isPasswordValid(password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid email or password");
  }

  // console.log("login successful");
  const token = user.generateToken();

  res.status(200).json({
    message: "Login successful",
    token: token,
    id: user._id,
  });
};

const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successfully" });
  } catch (err) {
    throw new ApiError(500, "Error in logging out the user:", err.message);
  }
};

const verifyUser = async (req, res) => {
  console.log(req.user._id);
  res.json({
    isAuthenticated: true,
    user: {
      id: req.user._id,
      email: req.user.email,
    },
  });
};

module.exports = {
  signup,
  login,
  logout,
  verifyUser,
};
