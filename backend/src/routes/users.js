//Imports
const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//Methods

//Login Users
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (!userData) return res.status(400).send("Invalid Credentials");

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) return res.status(400).send("Invalid Credentials");

    return res.status(200).send("SignIn Successfull");

  } catch (error) {
    console.log(error);
  }
});

//SignUp Users

router.post("/signUp", async (req, res) => {
  try {
    const checkData = await User.findOne({ email: req.body.email });    
    if (checkData) return res.status(400).send("User Already Registered.");

    const userData = new User({
      accountType: req.body.accountType,
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    await userData.save();
    return res.status(200).send("SignUp Successfull");

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
