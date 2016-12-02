const express = require("express");
const router = express.Router();
const fs = require("fs");
const twilio = require("twilio");
const authenticator = require("../../helpers/twilio/authenticator");

router.use("/", authenticator, (req, res) => {

  const goTo = parseInt(req.body.Digits);

  const resp = new twilio.TwimlResponse();

  for (var i = 1; i <= goTo; i++) {
    if (i % 15 == 0) resp.say("Fizz Buzz");
    else if (i % 5 == 0) resp.say("Buzz");
    else if (i % 3 == 0) resp.say("Fizz");
    else resp.say("" + i);
  }
  if (goTo <= 0) {
    resp.say("Next time, give me a number that's not zero. Goodbye");
  }
  else {
    resp.say("Thanks for playing");
  }


  res.writeHead(200, { 'Content-Type':'text/xml' });
  res.end(resp.toString());
})

module.exports = router;
