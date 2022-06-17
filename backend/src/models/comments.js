const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true     
    },
    blogId:{
        type: String,
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
    },
    upVotes:{
        type:Number,
        required:true,
        default:0
    }   
})
const Comment = new mongoose.model("Comment",commentSchema);
module.exports = Comment;