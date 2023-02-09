const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const mongoose = require("mongoose");

var bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const router = express.Router();
require("express-ws")(app);



app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./routes/userRoutes");
const presenceRouter = require("./routes/presenceRoutes");

app.use("/api/user", userRouter);
app.use("/api/presence", presenceRouter);

const port = process.env.PORT || 9002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});


const connect = async () => {
  const urlDb = process.env.DB_CONNECT;
  await mongoose.connect(urlDb, { useNewUrlParser: true }, (error, done) => {
    if (error) {
      console.log(error);
    }
    if (done) {
      console.log("connected to the database succesfuly");
    }
  });
};

mongoose.set("strictQuery", false);

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconncted !");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected !");
});

app.listen(port,  () => {
  connect();
  console.log("connected to the backend  !");
});

// module.exports.handler = serverless(app);
