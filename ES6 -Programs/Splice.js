let array = ["a", "b", "c", "f"]

// array.splice(2);
// console.log(array);
// //op=[ 'a', 'b' ]


// array.splice(2,1);
// console.log(array);
// //op=[ 'a', 'b', 'f' ]

array.splice(2,1,"g","k");
console.log(array);
//o/p=[ 'a', 'b', 'g', 'k', 'f' ]