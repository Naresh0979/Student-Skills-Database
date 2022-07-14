const axios = require("axios");

exports.getUserDataCodechef = async function (req, res) {
  const url = `https://competitive-coding-api.herokuapp.com/api/codechef/${req.body.userHandle}`;
  const responce = await axios.get(url);
//   console.log(responce.data.username);
  const { highest_rating, rating,global_rank } = responce.data;
  const { username } = responce.data.user_details;
  
//   const url2 = ` https://codeforces.com/api/user.status?handle=${req.body.userHandle}`;
//   const { data } = await axios.get(url2);
//   const questions = data.result.filter(
//     (contest) => contest.verdict === "OK"
//   ).length;
  const detail = [highest_rating, rating, username,global_rank];

  res.send(detail);
};