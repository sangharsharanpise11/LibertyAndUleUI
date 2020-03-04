addition(5, function (addResult, error) {
  if (!error) {
    substraction(addResult, function (subResult, error) {
      if (!error) {
        multiplication(subResult, function (mulResult, error) {
          if (!error) {
            console.log("result is :",mulResult);
          }          
        })
      }
    })
  }
})
function addition(val, callback) {
  return callback(val + 5), false;
}
function substraction(val, callback) {
  return callback(val -3), false;
}
function multiplication(val, callback) {
  return callback(val * 5), false;
}