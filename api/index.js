const express = require("express");

const router = express.Router();
import data from "../src/testData";

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});
router.get("/contests", (req, res) => {
  res.send({ contests: contests });
});

module.exports = router;
