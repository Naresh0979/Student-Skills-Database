//imports

const users = require('./routes/users');
const express = require("express");
const app = express();
const PORT = 2000;

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

//datebase connection
require("./db/connection");

//routes
app.use('/users',users);


//Server Status
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
