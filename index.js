const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");


const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, "0.0.0.0", () => {

//   console.log("connected to the backend  !");
});