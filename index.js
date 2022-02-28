const loadData = require("./functions/loadData");

const main = async () => {
  const allDates = await loadData();

  console.log(allDates);

  //   let count = 0;

  //   allDates.table.forEach((date, index) => {
  //     if (!date.E) {
  //       count = count + 1;
  //       console.log(date);
  //     }
  //   });

  //   console.log(count);
};

main();
