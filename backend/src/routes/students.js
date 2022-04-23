const User = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const studentRouter = express.Router();
const PersonalDetail = require("../models/personalDetail");

studentRouter.post("/editProfile", async (req, res) => {
  try {
    console.log(req.body);
    await PersonalDetail.deleteMany({ email: req.body.email });
    const personalData = new PersonalDetail({
      email: req.body.email,
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      mobileNumber: req.body.mobileNumber,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      address: req.body.address,
      bio: req.body.bio,
      educationList: JSON.parse(req.body.educationList),
      experienceList: JSON.parse(req.body.experienceList),
      projectList: JSON.parse(req.body.projectList),
      linkList: JSON.parse(req.body.linkList),
      skills: JSON.parse(req.body.skills),
    });
    await personalData.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = studentRouter;
