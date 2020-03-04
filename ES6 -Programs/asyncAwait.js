async function fun() {
  console.log("inside fun()");
  const response = await fetch('https://api.github.com/users');
  console.log("before response");
  const users = await response.json();
  console.log("user resolved");
  return users;  
}
console.log("before calling fun()");
let a = fun();
console.log("after calling fun()");
console.log(a);
a.then(data => console.log(data))
console.log("last line of code");



