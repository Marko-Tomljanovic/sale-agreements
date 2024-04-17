require("dotenv").config();
const mongoose = require("mongoose");

const database = (module.exports = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("error:", error);
  }
});

module.exports = database;
