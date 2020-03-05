// These variables will stay in the local scope of this module (in this case, person.js)
var firstName, lastName, age;

// Make sure your argument name doesn't conflict with variables set above
exports.setFirstName = function (fname) {
    firstName = fname;
};

exports.setLastName = function (lname) {
    lastName = lname;
};

exports.setAge = function (yrsold) {
    age = yrsold;
};

// You're returning an object with property values set above
exports.getPersonInfo = function () {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
};