const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true     
    },
    author: {
        type: String,
    },
   
    cid: {
        type: Number,
    },
    content: {
        type: String,
    },
   

})
const Student = new mongoose.model("Comment",comment);
module.exports = Comment;