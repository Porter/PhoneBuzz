const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use("/", (req, res) => {
  fs.readFile("xml/phone_buzz.xml", (err, buffer) => {
    if (err) {
      console.log(err);
      return res.end("An error occured");
    }
    res.end(buffer.toString());
  });
})

module.exports = router;
