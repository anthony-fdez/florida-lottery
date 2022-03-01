const express = require("express");

const updateData = require("../updateData");
const router = new express.Router();
const fs = require("fs");

router.get("/history", async (req, res) => {
  try {
    try {
      const lastUpdated = require("../lastUpdated.json");
      const dateNow = new Date().getTime() / 1000;
      const difference = dateNow - lastUpdated.lastUpdated;

      if (difference > 30) {
        await updateData({ forceUpdate: true });
      }
    } catch {
      await updateData({ forceUpdate: true });
    }

    const allDates = require("../allDates.json");

    const paginated = allDates.table.slice(
      req.body.start || 0,
      req.body.end || 75
    );

    res.status(200).send({ table: paginated, total: sortedNumbers.length });
  } catch (err) {
    res.status(500).send("error");
  }
});

router.get("/sorted/up", async (req, res) => {
  try {
    await updateData();

    const sortedNumbers = require("../sortedNumbers.json");

    const paginated = sortedNumbers.table.slice(
      req.body.start || 0,
      req.body.end || 75
    );

    res.status(200).send({ table: paginated, total: sortedNumbers.length });
  } catch (err) {
    res.status(500).send("error");
  }
});

router.get("/sorted/down", async (req, res) => {
  try {
    await updateData();

    const sortedNumbers = require("../sortedNumbers.json");

    const sortedDown = sortedNumbers.table.reverse();

    const paginated = sortedDown.slice(req.body.start || 0, req.body.end || 75);

    res.status(200).send({ table: paginated, total: sortedNumbers.length });
  } catch (err) {
    res.status(500).send("error");
  }
});

router.post("/sorted/oldest", async (req, res) => {
  try {
    const lastUpdated = returnlastUpdated();
    const dateNow = new Date().getTime() / 1000;
    const difference = dateNow - lastUpdated.lastUpdated;

    // six hours
    if (difference > 21600) {
      await updateData({ forceUpdate: true });
    } else {
      await updateData({ forceUpdate: false });
    }

    const sortedNumbersOldest = JSON.parse(
      fs.readFileSync("sortedNumbers_oldest.json", "utf-8")
    );

    const paginated = sortedNumbersOldest.table.slice(
      req.body.start || 0,
      req.body.end || 75
    );

    res
      .status(200)
      .send({ table: paginated, total: sortedNumbersOldest.length });
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
});

const returnlastUpdated = () => {
  try {
    let jsonData = JSON.parse(fs.readFileSync("lastUpdated.json", "utf-8"));
    return jsonData;
  } catch {
    console.log("failed loading last upadted");
  }
};

module.exports = router;
