const loadData = require("./functions/loadData");
const getStats = require("./functions/getStats");

const main = async () => {
  const allDates = await loadData({ update: true });

  const sortedNumbers = await getStats({ data: allDates });
};

main();
