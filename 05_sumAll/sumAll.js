const sumAll = function(numMin, numMax) {
  if (!Number.isInteger(numMin) || !Number.isInteger(numMax)) return "ERROR";
  if (numMin < 0 || numMax < 0) return "ERROR";
  if (numMin > numMax) {
    const temp = numMin;
    numMin = numMax;
    numMax = temp;
  }


let sum = 0;
  for (let i = numMin; i <= numMax; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
