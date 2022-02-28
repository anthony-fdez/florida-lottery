const cheerio = require("cheerio");
const axios = require("axios");

console.log("Starting...");

axios.get("https://www.flalottery.com/exptkt/p3.htm").then(({ data }) => {
  console.log("Loaded Data");

  const $ = cheerio.load(data);

  $(`body > table`).each((index, element) => {
    $(element)
      .find(`table  tbody > tr`)
      .each((index, element) => {
        const row = $(element).find("td").text().trim();

        if (row !== "" && row.length === 47) {
          console.log(row);
        }
      });
  });

  //   $(`body > table:nth-child(1) > tbody > tr`).each((element) => {
  //     // console.log($(element));
  //     console.l
  //   });

  //   console.log(
  //     $(
  //       "body > table:nth-child(1) > tbody > tr:nth-child(85) > td:nth-child(2) > font"
  //     ).text()
  //   );
});
