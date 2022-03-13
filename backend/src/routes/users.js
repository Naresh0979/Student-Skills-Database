//Imports
const User = require("../models/user");
const Otp = require("../models/otpVerification");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const userRouter = express.Router();

//Methods

//Login Users
userRouter.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (!userData || userData.isVerified)
      return res.status(400).send("Invalid Credentials");

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

//send OTP
const sendOtp = async (email) => {
  try {
    const otp = `${Math.floor(Math.random() * 999990 + 1)}`;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GEMAIL || "abc@gmail.com",
        pass: process.env.GPASSWORD || "1234",
      },
    });
    let mailOptions = {
      from: process.env.GEMAIL, // TODO: email sender
      to: email, // TODO: email receiver
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
          <p>OTP is : ${otp}</p>
          <p> OTP will expire in 1 hour <p>
          </div>`,
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return console.log("Error occurs",err);
      }
      return console.log("Email sent!!!");
    });
    // await transport.sendMail({
    //   from: process.env.MAIL_FROM,
    //   to: email,
    //   subject: "OTP for Account Verfication",
    //   html: `
    //       <div className="email" 
    //       style="border: 1px solid black;
    //       padding: 20px;
    //       font-family: sans-serif;
    //       line-height: 2;
    //       font-size: 20px; 
    //       ">
    //       <h2>HERE IS YOUR OTP for Verfication</h2>
    //       <p>OTP is : ${otp}</p>
    //       <p> OTP will expire in 1 hour <p>
    //       </div>`,
    // });
    return otp;
  } catch (error) {
    console.log(error);
  }
};

//SignUp Users

userRouter.post("/signUp", async (req, res) => {
  try {
    const checkData = await User.findOne({ email: req.body.email });

    if (checkData && checkData.isVerified) {
      return res.json({ Status: "F" });
    }
    await User.deleteMany({ email: req.body.email });
    await Otp.deleteMany({ email: req.body.email });
    const userData = new User({
      accountType: req.body.accountType,
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      isVerified: false,
    });

    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    await userData.save();
    const otpNumber = await sendOtp(userData.email);
    const otpData = new Otp({
      email: req.body.email,
      otp: otpNumber,
      expireTime: Date.now() + 3600000,
    });
    const otpSalt = await bcrypt.genSalt(5);
    otpData.otp = await bcrypt.hash(otpData.otp, otpSalt);
    otpData.save();
    return res.status(200).json({ Status: "S", user: userData });
  } catch (error) {
    console.log(error);
  }
});

// LogOUT
userRouter.get("/logout", (req, res) => {
  return res
    .clearCookie("jwt")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

// Verify Otp
userRouter.post("/verifyOTP", async (req, res) => {
  try {
    const otpData = await Otp.findOne({ email: req.body.email });
    if (!otpData) {
      return res.status(400).json({ Status: "F", message: "Invalid details" });
    }

    if (otpData.expireTime < Date.now()) {
      await Otp.deleteMany({ email: req.body.email });
      return res.status(400).json({ Status: "F", message: "Expired" });
    }
    const validOtp = await bcrypt.compare(req.body.otp, otpData.otp);
    if (!validOtp) return res.status(400).json({ Status: "F" });
    await Otp.deleteMany({ email: req.body.email });
    await User.updateOne(
      { email: req.body.email },
      {
        $set: {
          isVerified: true,
        },
      }
    );
    return res.status(200).json({ Status: "S" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
