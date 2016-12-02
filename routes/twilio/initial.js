const express = require("express");
const router = express.Router();
const fs = require("fs");
const twilio = require("twilio");
const authenticator = require("../../helpers/twilio/authenticator");

router.use("/", (req, res) => {
  const resp = new twilio.TwimlResponse();
  resp.gather({ timeout:30, action:"/twilio/playback", finishOnKey:"*" }, function() {
    this.say('Please enter the number you would like me to count to, and then press *');
  });

  res.writeHead(200, { 'Content-Type':'text/xml' });
  res.end(resp.toString());
})

module.exports = router;
