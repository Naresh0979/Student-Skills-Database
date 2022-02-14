const axios = require("axios");
async function run(){
    console.log("entered");
    const url = "https://codeforces.com/api/problemset.problems";
    const data = await axios.get(url);
    console.log("entered");
    console.log(data.data.result.problems[0]);
}