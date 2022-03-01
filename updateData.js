const loadData = require("./functions/loadData");
const getStats = require("./functions/getStats");
const getAverage = require("./functions/getAverage");
const getMedian = require("./functions/getMedian");
const getOldestNumbers = require("./functions/getOldestNumbers");

const updateData = async () => {
  const allDates = await loadData({ update: true });
  const sortedNumbers = await getStats({ data: allDates });
  await getOldestNumbers({ data: sortedNumbers });
};

module.exports = updateData;
