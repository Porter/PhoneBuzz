const express = require("express");
const twilio = require("twilio");
const app = express();

const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

app.get("/", (req, res) => {
  res.end(twilioAuthToken + ", " + twilioAccountSID);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
