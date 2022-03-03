const fs = require("fs").promises;

const getByDayOfWeek = async ({ data }) => {
  const daily = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };

  data.table.map((day, index) => {
    let date = new Date(day.date.split("/").join("-")).getDay();

    switch (date) {
      case 0:
        day.M && daily.sunday.push(day.M);
        day.E && daily.sunday.push(day.E);
        break;
      case 1:
        day.M && daily.monday.push(day.M);
        day.E && daily.monday.push(day.E);
        break;

      case 2:
        day.M && daily.tuesday.push(day.M);
        day.E && daily.tuesday.push(day.E);
        break;

      case 3:
        day.M && daily.wednesday.push(day.M);
        day.E && daily.wednesday.push(day.E);
        break;

      case 4:
        day.M && daily.thursday.push(day.M);
        day.E && daily.thursday.push(day.E);
        break;

      case 5:
        day.M && daily.friday.push(day.M);
        day.E && daily.friday.push(day.E);
        break;

      case 6:
        day.M && daily.saturday.push(day.M);
        day.E && daily.saturday.push(day.E);
        break;
    }
  });

  await saveToJSONFile({ data: daily });
  return daily;
};

const saveToJSONFile = async ({ data }) => {
  var json = JSON.stringify(data);
  await fs.writeFile("day_of_week.json", json);
  console.log("File saved.");
};

module.exports = getByDayOfWeek;
