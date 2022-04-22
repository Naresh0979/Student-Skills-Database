//imports
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/users");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 2000;
const { getUpcomingContest } = require("./api/codeforces");
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const corsOptions = {
  credentials: true,
  origin: true,
};

app.use(cors(corsOptions));

//datebase connection
require("./db/connection");

//routes
app.use("/users", userRouter);

app.get("/getCFContests", getUpcomingContest);
 
//Server Status
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
 