const repeatString = function (stringWord, num) {
  let string = "";
  if(num < 0)return "ERROR";
  for (let i = 0; i < num; i++) {
    string += stringWord;
} return string;
};
// Do not edit below this line
module.exports = repeatString;
