const mongoose = require("mongoose");
const codingProfile = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  codechefUsername: {
    type: String,
    default: "NotAvailable",
  },
  codeforcesUsername: {
    type: String,
    default: "NotAvailable",
  },
  leetcodeUsername: {
    type: String,
    default: "NotAvailable",
  },
  codechefRating: {
    type: Number,
    default: 0,
  },
  codeforcesRating: {
    type: Number,
    default: 0,
  },
  leetcodeRating: {
    type: Number,
    default: 0,
  },
  codechefQuestion: {
    type: Number,
    default: 0,
  },
  codeforcesQuestion: {
    type: Number,
    default: 0,
  },
  leetcodeQuestion: {
    type: Number,
    default: 0,
  },
  leetcodePercentage: {
    type: Number,
    default: 0,
  },
});
const CodingProfile = new mongoose.model("CodingProfile", codingProfile);
module.exports = CodingProfile;
