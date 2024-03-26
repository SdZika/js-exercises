let myInegrers = [1, 3, 4, 5, 7, 8, 10, 11];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < myInegrers.length; i++) {
    const num = myInegrers[i];
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else { 
        oddNumbers.push(num);
    }
}
console.log(evenNumbers);
console.log(oddNumbers);