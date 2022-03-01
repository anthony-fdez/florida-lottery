const fs = require("fs").promises;

const getOldestNumbers = async ({ data }) => {
  const sortedDataByDate = data.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.dates[0]) - new Date(b.dates[0]);
  });

  await saveToJSONFile({ data: sortedDataByDate });
  return sortedDataByDate;
};

const saveToJSONFile = async ({ data }) => {
  console.log(
    "Saving sorted numbers by oldest number that has came out to file."
  );

  const obj = {
    table: data,
  };

  var json = JSON.stringify(obj);
  await fs.writeFile("sortedNumbers_oldest.json", json);
  console.log("File saved.");
};

module.exports = getOldestNumbers;
