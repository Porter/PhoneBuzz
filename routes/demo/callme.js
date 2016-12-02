const express = require("express");
const router = express.Router();
const twilioHelper = require("../../helpers/twilio/twilio_helper");
const demoHelper = require("../../helpers/demo/demo_helper");
const DBHelper = require("../../helpers/db/db_helper");

function helper(data, req, res) {
  const delay = data.delay;
  const phoneNumber = data.phoneNumber;

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
}


router.post("/", (req, res) => {
  const id = req.body.id;
  if (id != "") {
    DBHelper.getById(id, (err, result) => {
      helper(result, req, res);
    });
  }
  else {
    helper(req.body, req, res);
  }

})

module.exports = router;
