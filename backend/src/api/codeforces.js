const axios = require("axios");
async function getUserContest(userHandle){
    console.log("entered");
    const url = `https://codeforces.com/api/user.rating?handle=${userHandle}`;
    const responce = await axios.get(url);
}
async function getUserRating(userHandle){
    const url = `https://codeforces.com/api/user.info?handles=${userHandle}`;
    const responce = await axios.get(url);
    const { maxRating } = responce.data.result[0]; 
    return  maxRating;
}
module.exports = {getUserRating , getUserContest};