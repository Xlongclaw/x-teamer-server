const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: String,
  members: [String],
});

const teamModel = mongoose.model("team", teamSchema);

module.exports = teamModel;
