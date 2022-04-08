const axios = require("axios");
async function getUserContest(userHandle) {
  console.log("entered");
  try {
    // const url = "https://competitive-programming-platform.p.rapidapi.com/codechef/rosk_21";
    // const responce = await axios.get(url);
      
  } catch (error) {
      console.log(error);
  }
}
async function getUserRating(userHandle) {
  const url = `https://codeforces.com/api/user.info?handles=${userHandle}`;
  const responce = await axios.get(url);
  const { maxRating } = responce.data.result[0];
  return maxRating;
}


// axios
//   .request(options)
//   .then(function (response) {
//       console.log("INSIDE");
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// console.log("AAGE HU BE");
module.exports = { getUserRating, getUserContest }; 
