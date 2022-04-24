const User = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const studentRouter = express.Router();
const PersonalDetail = require("../models/personalDetail");

studentRouter.post("/editProfile", async (req, res) => {
  try {
    // console.log(req.body);
    await PersonalDetail.deleteMany({ email: req.body.email });
    const personalData = new PersonalDetail({
      email: req.body.email,
      name: req.body.name,
      rollNumber: req.body.rollNumber, 
      mobileNumber: req.body.mobileNumber,
      country: req.body.country,
      state: req.body.state,
      district: req.body.district,
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
    res.send(true);
  } catch (e) {
    console.log(e);
    res.send(false);
  }
});
studentRouter.post("/getStudentData", async (req, res) => {
 try {
   
    await PersonalDetail.findOne({email:req.body.email},function(err,details){
      if(err) throw err;
     res.json(details)
      
    }).clone();
    
      
  } catch (e) {
    console.log(e);
    res.json({message: e.message})
  }

  
});

module.exports = studentRouter;
