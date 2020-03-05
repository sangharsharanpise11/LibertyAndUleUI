const person = {
  firstName: "sangharsha",
  lastName: "ranpise",
  
  // fullName() {
  //   return `${person.firstName} ${person.lastName}`
  // }

  get FullName() {
    return '${person.firstName} ${person.lastName}'
  },

  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "raviraj ranpise";
console.log(person);
