const mongoose = require("mongoose");
const mongoURL = `mongodb+srv://LevelUP:${process.env.MONGO_PWD}@cluster0.qb4uy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect("mongodb://localhost:27017/StudentSkills",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`database connection succesfull`);
}).catch((e) => {
    console.log(`no connection`,e);
})