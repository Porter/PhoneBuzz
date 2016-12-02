const express = require("express");
const router = express.Router();

const initial = require("./twilio/initial");

router.use("/init", initial);

router.get("/hi", (req, res) => {
  res.end("hi");
})

module.exports = router;
