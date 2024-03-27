let studentScores = [ 40, 50, 65, 85, 95, 100];
let studentGrade = [];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] < 60) {
        studentGrade.push("F");
    } else if (studentScores[i] < 70) {
        studentGrade.push("D");
    } else if (studentScores[i] < 80) {
        studentGrade.push("C");
    } else if (studentScores[i] < 90) {
        studentGrade.push("B");
    } else {
        studentGrade.push("A");
    }
}

console.log(studentGrade);