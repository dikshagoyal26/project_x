const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./utils/mail");
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const morgan = require("morgan");
app.use(morgan("dev"));
app.get("/inquiry", (req, res) => {
  console.log(req.query)
  let json = JSON.parse(req.query.data);
  console.log(json)
  sendMail(json);
  res.status(200).json({ status: "S", message: "mail sent successfully" });
});
app.post("/inquiry", (req, res) => {
  console.log(req)
  let json = req.body;
  sendMail(json);
  res.status(200).json({ status: "S", message: "mail sent successfully" });
});

app.use((req, res) => {
  res.send("OOPs!!! you have typed something wrong");
});

var PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`server start at ${PORT}`);
  }
});
