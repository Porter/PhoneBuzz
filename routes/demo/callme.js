const express = require("express");
const router = express.Router();
const twilioHelper = require("../../helpers/twilio/twilio_helper");
const demoHelper = require("../../helpers/demo/demo_helper");
const DBHelper = require("../../helpers/db/db_helper");

router.post("/", (req, res) => {
  const delay = req.body.delay;
  const phoneNumber = req.body.phoneNumber;

  demoHelper.parseDelay(delay, (err, seconds) => {
    if (err) {
      return res.end(err.toString());
    }
    if (!twilioHelper.isValidPhoneNumber(phoneNumber)) {
      return res.end("Sorry, that is not a valid phone number");
    }

    res.end("we'll call in " + delay + " (" + seconds + " seconds)");
    DBHelper.insertTime(delay, phoneNumber, (err, res) => {
      if (err) console.log(err);
    });

    setTimeout(() => {
      twilioHelper.test(phoneNumber, (err, resp) => {
        if (err) {
          console.log(err);
        }
      });
    }, seconds*1000)
  });

})

module.exports = router;
