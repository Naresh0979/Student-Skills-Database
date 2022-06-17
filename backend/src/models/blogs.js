const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true     
    },
    message: {
        type:String,
        required:true      
    },
    time:{
        type:Date,
        required:true,
        default:Date.now()
    }  
})
const Blog = new mongoose.model("Blog",blogSchema);
module.exports = Blog;