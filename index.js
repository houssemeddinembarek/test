const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
require("express-ws")(app);

app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.ws("/echo", (ws, res) => {
  ws.on("message", (msg) => {
    ws.send(msg);
  });
});

app.listen(3002);
