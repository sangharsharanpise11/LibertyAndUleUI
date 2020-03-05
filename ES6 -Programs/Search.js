let array = [1, 25,33, 55,36,11,95,10];

console.log(array.indexOf(11));//6
console.log(array.lastIndexOf(11));//12

console.log(array.indexOf(100));//-1
console.log(array.lastIndexOf(100));//-1

let over30 = function(element, index, theArray) {
  console.log(element + "-" + index + "-" + theArray);
  return element > 30;
};
console.log(array.findIndex(over30));
//op=1-0-1,25,6,33,5,8,11,9,11
// 25-1-1,25,6,33,5,8,11,9,11
// 6-2-1,25,6,33,5,8,11,9,11
// 33-3-1,25,6,33,5,8,11,9,11
// 3

let result = array.find(function(element) {
  return element > 5 && element < 20;
});
console.log(result);//11

let result1 = array.find(element => element > 5 && element < 20);
console.log(result1);//11