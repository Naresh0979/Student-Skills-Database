const axios = require("axios");

exports.getUserDataLeetcode = async function (req, res) {
    // console.log(req.body.userHandle);
  const url = `https://competitive-coding-api.herokuapp.com/api/leetcode/${req.body.userHandle}`;
  const responce = await axios.get(url);
//   console.log(responce.data);
  const {total_problems_solved, acceptance_rate, ranking } = responce.data;
//   const { username } = responce.data.user_details;
  
//   const url2 = ` https://codeforces.com/api/user.status?handle=${req.body.userHandle}`;
//   const { data } = await axios.get(url2);
//   const questions = data.result.filter(
//     (contest) => contest.verdict === "OK"
//   ).length;
  const detail = [total_problems_solved,acceptance_rate, ranking];
 
  res.send(detail);
};