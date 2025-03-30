const repeatString = function (str, num) {
  let text = "";
  for (let i = 0; i < num; i++) {
    text += str;
  }
  return text;
  //return str.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
