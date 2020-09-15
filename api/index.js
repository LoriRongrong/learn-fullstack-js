const express = require("express");

const router = express.Router();
import data from "../src/testData";

router.get("/contests", (req, res) => {
  res.send({ contests: data.contests });
});

module.exports = router;
