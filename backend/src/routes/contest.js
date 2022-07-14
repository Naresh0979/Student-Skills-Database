const express = require("express");
const contestRouter = express.Router();
const {getUpcomingContest,getUserDataCodeforces} = require("../api/codeforces");
const {getUserDataCodechef} = require("../api/codechef");
const {getUserDataLeetcode} = require("../api/leetcode");

contestRouter.get('/CodeForces',getUpcomingContest);
contestRouter.post('/CodeForces/getUserData',getUserDataCodeforces);
contestRouter.post('/Codechef/getUserData',getUserDataCodechef);
contestRouter.post('/Leetcode/getUserData',getUserDataLeetcode);

module.exports = contestRouter;