const removeFromArray = function(array, ...numAndWord) {
  const newArray=[];
  array.forEach((element) => {
    if(!numAndWord.includes(element)){
    newArray.push(element);
  }
});
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
