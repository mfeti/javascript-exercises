const add = function (...args) {
  return args.reduce((sum, cur) => sum + cur, 0);
};

const subtract = function (...args) {
  return args.slice(1).reduce((result, cur) => result - cur, args[0]);
};

const sum = function (arr) {
  return arr.reduce((sum, cur) => sum + cur, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, cur) => result * cur, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
