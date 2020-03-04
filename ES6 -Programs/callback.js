
const students = [
    { name: "ravi", age: "20" },
    { name: "sangharsha", age: "22" }
]

function enrollStudent(newStudent,callback) {
    setTimeout(function () {
        students.push(newStudent);
        callback();
    }, 1000);
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
enrollStudent(newStudent,getStudents);
// getStudents();