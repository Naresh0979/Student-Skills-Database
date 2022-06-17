const User = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const studentRouter = express.Router();
const PersonalDetail = require("../models/personalDetail");
const Post = require("../models/post");

const {v4 : uuidv4} = require('uuid');


studentRouter.post("/createpost", async (req, res) => {
  try {
   // console.log(req.body.post);
    //await PersonalDetail.deleteMany({ email: req.body.email });
    const post = new Post({
      email: req.body.post.email,
      author: req.body.post.author,
      content:req.body.post.content,
      pid : uuidv4(),
      commentID: []
      
    });
    await post.save();
    res.send(post);
  //  console.log("post created");
  } catch (e) {
    console.log(e);
    res.send(false);
  }
});
studentRouter.post("/createcomment", async (req, res) => {
  try {
   // console.log(req.body.post);
    //const postid = await Post.findOne({ name: articleName });
   // await PersonalDetail.deleteMany({ email: req.body.email });
   await Post.updateOne(
    { pid: req.body.post.pid },
    {
      $set: {
        comments: articleInfo.comments.concat({ username, comment }),
      },
    }
  )
    const post = new Post({
      email: req.body.post.email,
      author: req.body.post.author,
      content:req.body.post.content,
      pid : uuidv4(),
      commentID: []
      
    });
    await post.save();
    res.send(post);
  //  console.log("post created");
  } catch (e) {
    console.log(e);
    res.send(false);
  }
});

studentRouter.post("/getallPost", async (req, res) => {
  try {
    
     await Post.find({},function(err,details){
       if(err) throw err;
      res.json(details)
       
     }).clone();
     
       
   } catch (e) {
     console.log(e);
     res.json({message: e.message})
   }
 
   
 }); 
 
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
