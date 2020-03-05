var person = require('./personSetterGetter.js');

// Sets first name
person.setFirstName('Sangharsha');

// Sets last name
person.setLastName('ranpise');

// Sets age
person.setAge(56);

// Outputs first name, last name, and age as an object literal
console.log(person.getPersonInfo());