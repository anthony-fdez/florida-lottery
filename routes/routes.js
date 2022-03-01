const express = require("express");

const updateData = require("../updateData");
const router = new express.Router();

router.get("/sorted/up", async (req, res) => {
  try {
    await updateData();

    const sortedNumbers = require("../sortedNumbers.json");

    res.status(200).send(sortedNumbers);
  } catch (err) {
    res.status(500).send("error");
  }
});

router.get("/sorted/oldest", async (req, res) => {
  try {
    await updateData();

    const sortedNumbersOldest = require("../sortedNumbers_oldest.json");

    res.status(200).send(sortedNumbersOldest);
  } catch (err) {
    res.status(500).send("error");
  }
});

module.exports = router;
