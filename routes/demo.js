const express = require("express");
const router = express.Router();

const callme = require("./demo/callme");

router.use("/callme", callme);

module.exports = router;
