const leapYears = function(year) {
  let checkYear = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 1 : 0;
  if (! checkYear )
      return false;
  else
      return true;
};

// Do not edit below this line
module.exports = leapYears;
