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

router.get("/contests/:contestId", (req, res) => {
  // this will give the contest obj
  let contest = contests[req.params.contestId];
  contest.description = "Lori is a happy human being";
  res.send(contest);
});

module.exports = router;
