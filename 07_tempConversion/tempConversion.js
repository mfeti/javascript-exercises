const convertToCelsius = function (fahrenheit) {
  let convertedValue = ((fahrenheit - 32) * 5) / 9;
  return Number.isInteger(convertedValue)
    ? convertedValue
    : +convertedValue.toFixed(1);
};

const convertToFahrenheit = function (celsius) {
  let convertedValue = (celsius * 9) / 5 + 32;
  return Number.isInteger(convertedValue)
    ? convertedValue
    : +convertedValue.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
