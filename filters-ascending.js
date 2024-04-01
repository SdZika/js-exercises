/*
Problem: Given an array of numbers, write a JavaScript program that first filters out all numbers less than 10, then sorts the remaining numbers in ascending order. 
Use a for loop for filtering and any method of your choice for sorting. Input example: [5, 11, 2, 16, 4, 18, 1, 20]. */

let myArr = [5, 11, 2, 16, 4, 18, 1, 20];

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] < 10) {
        myArr.splice(i,1);
        
    }
}
console.log(myArr.sort());