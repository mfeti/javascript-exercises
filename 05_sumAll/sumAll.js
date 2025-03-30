const sumAll = function (initialNum, endNum) {
  if (!Number.isInteger(initialNum) || !Number.isInteger(endNum))
    return "ERROR";
  if (initialNum < 0 || endNum < 0) return "ERROR";
  let sum = 0;
  if (initialNum > endNum) {
    let temp = initialNum;
    initialNum = endNum;
    endNum = temp;
  }
  for (let i = initialNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
