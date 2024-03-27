let myIntegrers = [2, 8, 10, 15, 50, 11, 55, 9, 99];
let minNumber = Math.min(...myIntegrers);
let maxNumber = Math.max(...myIntegrers);
let minMaxObject = {};
minMaxObject.min = minNumber;
minMaxObject.max = maxNumber;
console.log(minMaxObject);