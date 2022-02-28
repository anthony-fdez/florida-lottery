const getNumberList = require("./getNumberList");
const fs = require("fs").promises;

const getStats = async ({ data }) => {
  const numbers = getNumberList();

  data.table.forEach((number) => {
    if (number.E) {
      const indexOfNumberList = numbers.findIndex((e) => e.number === number.E);

      numbers[indexOfNumberList].repeated++;
      numbers[indexOfNumberList].dates.push(number.date);
    }
    if (number.M) {
      const indexOfNumberList = numbers.findIndex((e) => e.number === number.M);

      numbers[indexOfNumberList].repeated++;
      numbers[indexOfNumberList].dates.push(number.date);
    }
  });

  numbers.sort(function (a, b) {
    var keyA = a.repeated,
      keyB = b.repeated;
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  await saveToJSONFile({ data: numbers });

  return numbers;
};

const saveToJSONFile = async ({ data }) => {
  console.log("Saving sorted numbers to file.");

  const obj = {
    table: data,
  };

  var json = JSON.stringify(obj);
  await fs.writeFile("sortedNumbers.json", json);
  console.log("File saved.");
};

module.exports = getStats;
