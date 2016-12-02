const express = require("express");
const router = express.Router();

const initial = require("./twilio/initial");
const playback = require("./twilio/playback");

router.use("/init", initial);
router.use("/playback", playback);

module.exports = router;
