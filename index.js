const express = require("express");
const app = express();
var bodyParser = require('body-parser')

const twilioRouter = require("./routes/twilio");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/twilio", twilioRouter);

app.get("/", (req, res) => {
  res.end("ok");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
