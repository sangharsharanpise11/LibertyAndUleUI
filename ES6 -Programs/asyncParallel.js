var async = require('async');

var stack = {};

stack.getUserName = function (callback) {
  var userName = "sangharsha";
  callback(null, userName);
}

stack.getUserAge = function (callback) {
  var userAge = "25";
  callback(null, userAge);
}

stack.getUserGender = function (callback) {
  var userGender = "female";
  callback(null, userGender);
}

async.parallel(stack, function (error, result) {
  if (error) {
    consoler.error(error);
    return;
  }
console.log("Result :",result);

})

// Result : {
//   getUserName: 'sangharsha',
//   getUserAge: '25',
//   getUserGender: 'female'
// }