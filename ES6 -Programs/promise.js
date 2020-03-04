
const students = [
  { name: "ravi", age: "20" },
  { name: "sangharsha", age: "22" }
]

function enrollStudent(newStudent) {
  return new Promise(function (resolve,reject) {
    setTimeout(function () {
      students.push(newStudent);
      console.log("student enrolled .....")
      let error = false;
      if (!error) {
        resolve();
      }
      else {
        reject();
      }
  }, 1000);
  })
  
}

function getStudents() {
  setTimeout(function () {
      let str = "";
      students.forEach(function (student) {
          str +=`<li>${student.name}</li>`
      })
      document.getElementById('student').innerHTML = str;
  }, 1000);
}

var newStudent = { name: "priya", age: "20" }
enrollStudent(newStudent).then(getStudents).catch(function () {
  console.log("error occured");
});
// getStudents();