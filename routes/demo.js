const express = require("express");
const router = express.Router();

const callme = require("./demo/callme");
const times = require("./demo/times");

router.use("/callme", callme);
router.use("/times", times);

module.exports = router;
