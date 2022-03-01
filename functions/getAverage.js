const getAverage = ({ data }) => {
  let sum = 0;

  data.forEach((number) => {
    sum += number.repeated;
  });

  const average = sum / data.length;

  return average;
};

module.exports = getAverage;
