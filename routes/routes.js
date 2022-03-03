const express = require("express");

const updateData = require("../updateData");
const router = new express.Router();
const fs = require("fs");

const getNumbers = require("./getNumbers");

router.use(getNumbers);

router.post("/history", async (req, res) => {
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

    const paginated = sortedDataByDate.slice(
      req.body.start || 0,
      req.body.end || 75
    );

    res.status(200).send({ table: paginated, total: sortedDataByDate.length });
  } catch (err) {
    res.status(500).send("error");
  }
});

router.post("/sorted/up", async (req, res) => {
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

    const sortedNumbers = JSON.parse(
      fs.readFileSync("sortedNumbers.json", "utf-8")
    );

    const paginated = sortedNumbers.table.slice(
      req.body.start || 0,
      req.body.end || 75
    );

    res.status(200).send({ table: paginated, total: sortedNumbers.length });
  } catch (err) {
    res.status(500).send("error");
  }
});

router.post("/sorted/down", async (req, res) => {
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

    const sortedNumbers = JSON.parse(
      fs.readFileSync("sortedNumbers.json", "utf-8")
    );

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

router.get("/daily/year", async (req, res) => {
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

    const daily = JSON.parse(fs.readFileSync("day_of_week.json", "utf-8"));

    const sunday = daily.sunday.slice(0, 56);
    const monday = daily.monday.slice(0, 56);
    const tuesday = daily.tuesday.slice(0, 56);
    const wednesday = daily.wednesday.slice(0, 56);
    const thursday = daily.thursday.slice(0, 56);
    const friday = daily.friday.slice(0, 56);
    const saturday = daily.saturday.slice(0, 56);

    const getStartedWith = ({ numbers }) => {
      const startedWithCount = [];

      numbers.map((number, index) => {
        const firstNumber = number.slice(0, 1);

        const numberIndex = startedWithCount.findIndex(
          (e) => e.number === firstNumber
        );

        if (numberIndex === -1) {
          startedWithCount.push({ number: firstNumber, count: 1 });
        } else {
          startedWithCount[numberIndex].count++;
        }
      });

      const sorted = startedWithCount.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return parseInt(a.number) - parseInt(b.number);
      });

      return sorted;
    };

    const newDaily = {
      sunday: {
        numbers: sunday,
        startedWith: getStartedWith({ numbers: sunday }),
      },
      monday: {
        numbers: monday,
        startedWith: getStartedWith({ numbers: monday }),
      },
      tuesday: {
        numbers: tuesday,
        startedWith: getStartedWith({ numbers: tuesday }),
      },
      wednesday: {
        numbers: wednesday,
        startedWith: getStartedWith({ numbers: wednesday }),
      },
      thursday: {
        numbers: thursday,
        startedWith: getStartedWith({ numbers: thursday }),
      },
      friday: {
        numbers: friday,
        startedWith: getStartedWith({ numbers: friday }),
      },
      saturday: {
        numbers: saturday,
        startedWith: getStartedWith({ numbers: saturday }),
      },
    };

    res.status(200).send({ data: newDaily });
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
});

router.get("/daily/all", async (req, res) => {
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

    const daily = JSON.parse(fs.readFileSync("day_of_week.json", "utf-8"));

    res.status(200).send({ data: daily });
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
