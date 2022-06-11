const mongoose = require("mongoose");

const post = new mongoose.Schema({
    email: {
        type:String,
        
        required:true     
    },
    author: {
        type: String,
    },
   
    pid: {
        
        type: String,
    },
    content: { 
        type: String,
    },
    commentId: {
        type: Array,
    },

})
const Post = new mongoose.model("Post",post);
module.exports = Post; 