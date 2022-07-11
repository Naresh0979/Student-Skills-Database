const express = require("express");
const contestRouter = express.Router();
const {getUpcomingContest,getUserData} = require("../api/codeforces");

contestRouter.get('/CodeForces',getUpcomingContest);
contestRouter.get('/CodeForces/getUserData',getUserData);

module.exports = contestRouter;