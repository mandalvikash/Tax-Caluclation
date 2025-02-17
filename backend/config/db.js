const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {

const url=process.env.DB_URL;
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
