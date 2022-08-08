const axios = require("axios");
const CodingProfile = require("../models/codingProfile");
exports.getUserDataLeetcode = async function (req, res) {
  try {
    const url = `https://competitive-coding-api.herokuapp.com/api/leetcode/${req.body.userHandle}`;
    const responce = await axios.get(url);
    const { total_problems_solved, acceptance_rate, ranking } = responce.data;
    const detail = [total_problems_solved, acceptance_rate, ranking];
    if (detail.length === 4)
      await CodingProfile.updateOne(
        { email: req.body.email },
        {
          $set: {
            leetcodeQuestion: total_problems_solved,
            leetcodeRanking: ranking,
            leetcodePercentage: acceptance_rate,
          },
        }
      );
    res.send(detail);
  } catch (error) {
    console.log(error);
    return res.send("Failed");
  }
};
