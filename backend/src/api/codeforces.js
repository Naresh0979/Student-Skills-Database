const axios = require("axios");
async function run(){
    console.log("entered");
    const url = "https://codeforces.com/api/user.rating?handle=amitgupta20";
    const responce = await axios.get(url);
    console.log("entered");
    console.log(responce.data);
}
module.exports = {run};