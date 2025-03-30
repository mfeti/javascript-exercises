const removeFromArray = function (arr, ...args) {
  return arr.filter((ele) => !args.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
