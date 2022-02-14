const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://CollegeSpace:project2021@cluster0.3gnvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`database connection succesfull`);
}).catch((e) => {
    console.log(`no connection`);
})