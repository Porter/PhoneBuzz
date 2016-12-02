const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const twilio = require("twilio");
const twilioHelper = require("./helpers/twilio/twilio_helper");


const twilioRouter = require("./routes/twilio");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/twilio", twilioRouter);

app.get("/", (req, res) => {
  res.end("ok");
});

app.get("/test", (req, res) => {
  twilioHelper.test();
  res.end("test called");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
