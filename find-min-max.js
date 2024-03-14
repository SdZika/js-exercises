let myNumbers = [1, 4, 10, 15, 20];
let minNum = Math.min(...myNumbers);
let maxNum = Math.max(...myNumbers);
console.log(minNum);
console.log(maxNum);

let minValue = Infinity
for (let i = 0; i < myNumbers.length; i++) {
    if (minValue > myNumbers[i]) {
        minValue = myNumbers[i];
    }
}
console.log(minValue);

let maxValue = -Infinity
for (let i = 0; i < myNumbers.length; i++) {
    if (maxValue < myNumbers[i]) {
        maxValue = myNumbers[i];
    }
}
console.log(maxValue);