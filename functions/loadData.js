const scrapeNewData = require("./scrapeNewData");

const loadData = async () => {
  try {
    const allDatesFile = require("../allDates.json");

    console.log("Data loaded from file.");

    return allDatesFile;
  } catch (e) {
    console.log("Failed to load from file.");

    const allDates = await scrapeNewData();

    return allDates;
  }
};

module.exports = loadData;
