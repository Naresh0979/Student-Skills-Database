const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/StudentSkillDatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`database connection succesfull`);
}).catch((e) => {
    console.log(`no connection`);
})