var promise = new Promise(function (resolve, reject) {
  resolve(5);
})

promise.then(addition).then(substraction).then(multiplication).then((result) => {
  console.log("result is :", result);
}).catch((error) => {
  console.log("error is :",error);
})
  
function addition(val) {
  return val + 5;
}
function substraction(val) {
  return val -3;
}
function multiplication(val) {
  return val * 5;
}