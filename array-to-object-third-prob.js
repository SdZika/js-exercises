/* output should be: 
const students = [
    { name: "John Doe", grade: "A" },
    { name: "Jane Smith", grade: "B" },
    { name: "Emily Jones", grade: "A" },
    { name: "William Brown", grade: "C" },
    { name: "Grace Davis", grade: "B" }
]*/


const grade = {
    A: ["John Doe", "Emily Jones"],
    B: ["Jane Smith", "Grace Davis"],
    C: ["William Brown"]
}; // this is input

const students = [];

for (let key in grade ) {
    for (let i in grade[key]) {
        console.log(grade[key][i]); // print valuese jon doe emily jones etc.
        students.push({
            name: grade[key][i],
            grade: key
        })
    }
}

console.log(students);