const axios = require("axios");
exports.getUserContest = async function (userHandle) {
  console.log("entered");
  const url = `https://codeforces.com/api/user.rating?handle=${userHandle}`;
  const responce = await axios.get(url);
};
exports.getUserRating = async function (userHandle) {
  const url = `https://codeforces.com/api/user.info?handles=${userHandle}`;
  const responce = await axios.get(url);
  const { maxRating } = responce.data.result[0];
  return maxRating; 
};
exports.getUpcomingContest = async function (req, res) {
  const url = `https://codeforces.com/api/contest.list?gym=false`;
  const { data } = await axios.get(url);
  const result = data.result.filter((contest) => contest.phase === "BEFORE");
  result.sort();
  //result.reverse();
  res.send(result);
};
