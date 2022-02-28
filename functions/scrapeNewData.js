const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs").promises;

const scrapeNewData = async () => {
  console.log("Requesting data from url.");
  let allDates = [];

  await axios
    .get("https://www.flalottery.com/exptkt/p3.htm")
    .then(async ({ data }) => {
      console.log("Data loaded.");
      console.log("Scraping...");

      const $ = cheerio.load(data);

      $(`body > table`).each((index, element) => {
        $(element)
          .find(`tbody > tr`)
          .each((index, element) => {
            const row = $(element).find("td").text().trim();

            if (row !== "") {
              if (row.length !== 47) {
                console.log(row.length);
                console.log(row);
              }
              // const splitedRow = row.split("");

              // const date1 = splitedRow.slice(0, 8).join("");
              // const period1 = splitedRow[9];
              // const number1 = splitedRow
              //   .slice(10, 15)
              //   .join("")
              //   .split("-")
              //   .join("");

              // const date2 = splitedRow.slice(16, 24).join("");
              // const period2 = splitedRow[25];
              // const number2 = splitedRow
              //   .slice(26, 31)
              //   .join("")
              //   .split("-")
              //   .join("");

              // const date3 = splitedRow.slice(32, 40).join("");
              // const period3 = splitedRow[41];
              // const number3 = splitedRow
              //   .slice(42, 47)
              //   .join("")
              //   .split("-")
              //   .join("");

              // const matchingDate1Index = allDates.findIndex(
              //   (e) => e.date === date1
              // );
              // const matchingDate2Index = allDates.findIndex(
              //   (e) => e.date === date2
              // );
              // const matchingDate3Index = allDates.findIndex(
              //   (e) => e.date === date3
              // );

              // if (matchingDate1Index === -1) {
              //   allDates.push({
              //     date: date1,
              //     [period1]: number1,
              //   });
              // } else {
              //   allDates[matchingDate1Index][period1] = number1;
              // }

              // if (matchingDate2Index === -1) {
              //   allDates.push({
              //     date: date2,
              //     [period2]: number2,
              //   });
              // } else {
              //   allDates[matchingDate2Index][period2] = number2;
              // }

              // if (matchingDate3Index === -1) {
              //   allDates.push({
              //     date: date3,
              //     [period3]: number3,
              //   });
              // } else {
              //   allDates[matchingDate3Index][period3] = number3;
              // }
            }
          });
      });

      await saveToJSONFile({ data: allDates });
    })
    .catch((e) => {
      console.log("Failed to load data from url.");
    });

  return allDates;
};

const saveToJSONFile = async ({ data }) => {
  console.log("Saving to file.");

  const obj = {
    table: data,
  };

  var json = JSON.stringify(obj);
  await fs.writeFile("allDates.json", json);
  console.log("File saved.");
};

module.exports = scrapeNewData;
