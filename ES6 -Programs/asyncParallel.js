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


async.parallel([
  function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
  }
],
function(err, results) {
  console.log(results);
  // the results array will equal [1, 2] even though
  // the second function had a shorter timeout.
  // Task Two
  // Task One
  // [ 1, 2 ]
});


// an example using an object instead of an array
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
    }
}, function(err, results) {
  console.log(results);
  // results now equals to:
  // Task Two
  // Task One
  // { task2: 2, task1: 1 }
});