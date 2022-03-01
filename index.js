const loadData = require("./functions/loadData");
const getStats = require("./functions/getStats");
const getAverage = require("./functions/getAverage");
const getMedian = require("./functions/getMedian");

const main = async () => {
  const allDates = await loadData({ update: true });

  const sortedNumbers = await getStats({ data: allDates });

  console.log(
    `Average ammount of times a number has repeated: ${getAverage({
      data: sortedNumbers,
    })}`
  );

  console.log(`Data set median: ${getMedian({ data: sortedNumbers })}`);
};

main();
