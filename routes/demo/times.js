const express = require("express");
const router = express.Router();
const DBHelper = require("../../helpers/db/db_helper");

router.get("/", (req, res) => {
  DBHelper.getTimes((err, result) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    res.json(result);
  });
})

module.exports = router;
