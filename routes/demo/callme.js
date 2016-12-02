const express = require("express");
const router = express.Router();
const twilioHelper = require("../../helpers/twilio/twilio_helper");
const demoHelper = require("../../helpers/demo/demo_helper");

router.post("/", (req, res) => {
  demoHelper.parseDelay(req.body.delay, (err, seconds) => {
    if (err) {
      return res.end(err.toString());
    }
    res.end("we'll call in " + seconds + " seconds");
    setTimeout(() => {
      twilioHelper.test(req.body.phoneNumber, (err, resp) => {
        if (err) {
          console.log(err);
        }
      });
    }, seconds*1000)
  });

})

module.exports = router;
