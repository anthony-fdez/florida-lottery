const express = require("express");
const router = new express.Router();
const cheerio = require("cheerio");
const axios = require("axios");

const updateData = require("../updateData");
const fs = require("fs");

module.exports = router.get("/today", async (req, res) => {
  try {
    await axios
      .get("https://www.flalottery.com/pick3")
      .then(async ({ data }) => {
        const $ = cheerio.load(data);

        const day1 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(1)"
        )
          .text()
          .slice(0, 1);

        const day2 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(3)"
        )
          .text()
          .slice(0, 1);

        const day3 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(5)"
        )
          .text()
          .slice(0, 1);

        const dayFb = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span.fireBall"
        )
          .text()
          .trim()
          .slice(0, 1);

        const night1 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(1)"
        )
          .text()
          .slice(1, 2);

        const night2 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(3)"
        )
          .text()
          .slice(1, 2);

        const night3 = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span:nth-child(5)"
        )
          .text()
          .slice(1, 2);

        const nightFb = $(
          "#gameContentLeft > div.gamePageNumbers > p:nth-child(4) > span.fireBall"
        )
          .text()
          .trim()
          .slice(1, 2);

        const d = new Date();
        convertTZ(d, "America/New_York");

        const timeNow = d.getTime() / 1000;

        const day = returnTimeDay();
        const night = returnTimeNight();

        console.log("\n\n\n\n");
        console.log(timeNow);
        console.log(day);
        console.log("\n\n\n\n");

        if (timeNow > night) {
          return res.status(200).send({
            day: { number: `${day1}${day2}${day3}`, fb: dayFb },
            night: { number: `${night1}${night2}${night3}`, fb: nightFb },
          });
        } else if (timeNow > day) {
          return res.status(200).send({
            day: { number: `${day1}${day2}${day3}`, fb: dayFb },
            night: { number: null, fb: null },
          });
        } else {
          return res.status(200).send({
            day: { number: null, fb: null },
            night: { number: null, fb: null },
          });
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

module.exports = router.get("/yesterday", async (req, res) => {
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

    const allDates = JSON.parse(fs.readFileSync("allDates.json", "utf-8"));

    const sortedDataByDate = allDates.table.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });

    let date = new Date();
    date.setDate(date.getDate() - 1);

    const dateLatest = new Date(sortedDataByDate[0].date.split("/").join("-"));

    if (
      date.toISOString().split("T")[0] ===
      dateLatest.toISOString().split("T")[0]
    ) {
      res.status(200).send(sortedDataByDate[0]);
    } else return res.status(200).send(sortedDataByDate[1]);
  } catch (err) {
    res.status(500).send("server error");
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

const returnTimeDay = () => {
  const d = new Date();
  convertTZ(d, "America/New_York");

  const day = d;

  day.setDate(day.getDate());
  day.setHours(13);
  day.setMinutes(30);
  day.setSeconds(0);
  day.setMilliseconds(0);

  return day.getTime() / 1000;
};

const returnTimeNight = () => {
  const d = new Date();
  convertTZ(d, "America/New_York");

  const night = d;

  night.setDate(night.getDate());
  night.setHours(21);
  night.setMinutes(45);
  night.setSeconds(0);
  night.setMilliseconds(0);

  return night.getTime() / 1000;
};

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}
