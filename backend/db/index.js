const dotenv = require("dotenv");
const mongoose = require("mongoose");

const url = process.env.MONGO_URL1;

const dbConnect = async () => {
  try {
    if (!url) {
      console.log("MongoDB URL is not defined in .env file");
      process.exit(1); // Exit the process if URL is not defined
    }
    await mongoose.connect(url);
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

module.exports = dbConnect;
