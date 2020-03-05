let sentence = "hello I am Sangharsha";

let words = sentence.split(" ");
console.log(words);
//o/p=[ 'hello', 'i', 'am', 'sangharsha' ]


 let words = sentence.split(" ").sort();
console.log(words);
//o/p=[ 'am', 'hello', 'i', 'sangharsha' ]

let words = sentence.split("am");
console.log(words);
//o/p=[ 'hello i ', ' sangharsha' ]

let words = sentence.split("");
console.log(words);
//o/p=[
//   'h', 'e', 'l', 'l', 'o',
//   ' ', 'i', ' ', 'a', 'm',
//   ' ', 's', 'a', 'n', 'g',
//   'h', 'a', 'r', 's', 'h',
//   'a'
// ]

let words = sentence.split(" ");
let hypenthesis = words.join("-");
console.log(hypenthesis);
// //o/p=hello-i-am-sangharsha

let x = sentence.split(" ").sort().join(" ");
console.log(x);
//o/p=I Sangharsha am hello