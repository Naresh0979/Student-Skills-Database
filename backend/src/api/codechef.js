const axios = require("axios");

exports.getUserDataCodechef = async function (req, res) {
  try {
    const url = `https://competitive-coding-api.herokuapp.com/api/codechef/${req.body.userHandle}`;
    const responce = await axios.get(url);
    // console.log(responce.data.fully_solved);
    const { highest_rating, rating, global_rank } = responce.data;
    const { username } = responce.data.user_details;
    const { count } = responce.data.fully_solved;

    //   const url2 = ` https://codeforces.com/api/user.status?handle=${req.body.userHandle}`;
    //   const { data } = await axios.get(url2);
    //   const questions = data.result.filter(
    //     (contest) => contest.verdict === "OK"
    //   ).length;
    const detail = [highest_rating, rating, username, count];

    res.send(detail);
  } catch (error) {
    return res.send({ data: "Failed" });
  }
};
