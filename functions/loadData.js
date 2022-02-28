const scrapeNewData = require("./scrapeNewData");

const loadData = async ({ update }) => {
  if (update) {
    console.log("Manually updating the file.");

    const allDates = await scrapeNewData();

    return allDates;
  } else {
    try {
      const allDatesFile = require("../allDates.json");

      console.log("Data loaded from file.");

      return allDatesFile;
    } catch (e) {
      console.log("Failed to load from file.");

      const allDates = await scrapeNewData();

      return allDates;
    }
  }
};

module.exports = loadData;
