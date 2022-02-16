const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true     
    },
    otp: {
        type:String,
        required:true      
    },
    expireTime:{
        type:Date,
        required:true
    }   
})
const otp = new mongoose.model("otp",otpSchema);
module.exports = otp;