const getMedian = ({ data }) => {
  const medianIndex = data.length / 2;

  return data[medianIndex].repeated;
};

module.exports = getMedian;
