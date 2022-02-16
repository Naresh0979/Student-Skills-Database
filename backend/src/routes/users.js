//Imports
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require('cors');
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
    if (!validPassword) return res.status(400).json({ Status: "F" });

    const token = await userData.generateAuthToken();

    return res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 3000000),
        httpOnly: true,
      })
      .status(200)
      .json({ Status: "S", user: userData });
  } catch (error) {
    console.log(error);
  }
});

//SignUp Users

router.post("/signUp", async (req, res) => {
  try {
    //console.log(req.body);
    const checkData = await User.findOne({ email: req.body.email });

    if (checkData) {
      //console.log("inside");
      return res.json({ Status: "F" });
    }

    const userData = new User({
      accountType: req.body.accountType,
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      isVerified:false
    });

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    await userData.save();
    return res.status(200).json({ Status: "S", user: userData });
  } catch (error) {
    console.log(error);
  }
});

// LogOUT
router.get("/logout", (req, res) => {
  console.log("logging out");
  return res
    .clearCookie("jwt")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

//send OTP
router.post("/sendOTP", cors(), async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PWD,
      },
    });
    await transport.sendMail({
      from: process.env.MAIL_FROM,
      to: "guptaamitop@gmail.com",
      subject: "OTP for Account Verfication",
      html: `
          <div className="email" 
          style="border: 1px solid black;
          padding: 20px;
          font-family: sans-serif;
          line-height: 2;
          font-size: 20px; 
          ">
          <h2>HERE IS YOUR OTP for Verfication</h2>
          <p>OTP is : ${req.body.otp}</p>
          </div>`
    });
  
    return res.status(200).send("OTP SENT SUCCESSFULLY !!");
    
  } catch (error) {
    console.log(error);
    return res.status(400).send("ERROR OCCURED");
  }
  
});

module.exports = router;
