const express = require("express");
const router = express.Router();
const twilioHelper = require("../../helpers/twilio/twilio_helper");

router.post("/", (req, res) => {
  twilioHelper.test(req.body.phoneNumber, (err, resp) => {
    if (err) {
      console.log(err);
      return res.end("something went wrong, check the logs");
    }
    res.end("call made");
  });
})

module.exports = router;
