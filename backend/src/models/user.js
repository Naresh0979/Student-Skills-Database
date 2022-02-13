const mongoose = require("mongoose");
const user = new mongoose.Schema({
    accountType: {
        type:String,
        required:true      
    },
    fullName: {
        type:String,
        required:true            
    },
    email: {
        type:String,
        unique:true,
        required:true     
    },
    password: {
        type:String,
        required:true      
    }    
})

const User = new mongoose.model("User",user);
module.exports = User;