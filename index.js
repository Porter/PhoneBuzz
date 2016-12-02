const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const twilio = require("twilio");
const twilioHelper = require("./helpers/twilio/twilio_helper");

const demoRouter = require("./routes/demo");
const twilioRouter = require("./routes/twilio");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/twilio", twilioRouter);
app.use("/demo", demoRouter);

app.use('/', express.static('static/html/'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
