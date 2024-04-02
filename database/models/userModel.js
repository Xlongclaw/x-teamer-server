const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  avatar: String,
  domain: String,
  available: Boolean,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
