const getNumberList = () => {
  const numberList = [];

  for (let i = 0; i < 1000; i++) {
    let numberToString = i.toString();

    if (numberToString.length === 1) numberToString = `00${i}`;
    if (numberToString.length === 2) numberToString = `0${i}`;

    numberList.push({
      number: numberToString,
      repeated: 0,
      dates: [],
    });
  }

  return numberList;
};

module.exports = getNumberList;
