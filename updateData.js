const fs = require("fs").promises;

const loadData = require("./functions/loadData");
const getStats = require("./functions/getStats");

const getOldestNumbers = require("./functions/getOldestNumbers");
const getByDayOfWeek = require("./functions/getByDayOfWeek");

const updateData = async ({ forceUpdate }) => {
  if (forceUpdate) {
    await saveLastUpdated();

    const allDates = await loadData({ update: true });
    const sortedNumbers = await getStats({ data: allDates });
    await getOldestNumbers({ data: sortedNumbers });
    await getByDayOfWeek({ data: allDates });
  } else {
    const allDates = await loadData({ update: false });
    const sortedNumbers = await getStats({ data: allDates });
    await getOldestNumbers({ data: sortedNumbers });
    await getByDayOfWeek({ data: allDates });
  }
};

const saveLastUpdated = async () => {
  const obj = {
    lastUpdated: new Date().getTime() / 1000,
  };

  var json = JSON.stringify(obj);
  await fs.writeFile("lastUpdated.json", json);
};

module.exports = updateData;
