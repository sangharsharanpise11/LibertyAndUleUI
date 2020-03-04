var async = require('async'); 

async.series([
  function functionOne(callback) {
    callback(null,"function One is running")
  }, 
  function functionTwo(callback) {
    callback(null,"function Two is running")
  },
  function functionThree(callback) {
    callback(null,"function Three is running")
  }
],function(error,result) {
  console.log("Result :",result);
  
})
