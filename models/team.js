// Dependencies
var mongoose = require("mongoose");

// Schema
var teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  runs: {
    type: Number,
  },
  balls: {
    type: Number,
  },
  fours: {
    type: Number,
  },
  sixes: {
    type: Number,
  },
  strike_rate: {
    type: Number,
  },
});

// Return model
module.exports = mongoose.model("MyTeam", teamSchema, "myteam");
