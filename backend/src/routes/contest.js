const express = require("express");
const contestRouter = express.Router();
const {getUpcomingContest} = require("../api/codeforces");

contestRouter.get('/CodeForces',getUpcomingContest);

module.exports = contestRouter;