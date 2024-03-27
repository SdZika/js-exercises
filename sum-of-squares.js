let myNumbers = [2, 5, 6, 8, 10];
let squareNumbers = [];
let sumeOfNumbers = 0;
for (let i = 0; i < myNumbers.length; i++) {
    squareNumbers.push(Math.pow(myNumbers[i], 2));
}
console.log(squareNumbers);

for (let i = 0; i < squareNumbers.length; i++) {
    sumeOfNumbers = sumeOfNumbers + squareNumbers[i];
}

console.log(sumeOfNumbers);