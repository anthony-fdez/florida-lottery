const loadData = require("./functions/loadData");
const getStats = require("./functions/getStats");

const main = async () => {
  const allDates = await loadData({ update: true });

  getStats({ data: allDates });
};

main();
