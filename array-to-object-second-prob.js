/* Problem: Given an array of objects where each object has properties brand and model, write a JavaScript program 
to transform this array into an object of arrays categorized by brand. If the input array is 
[{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }]

output: [{ item: 'Apple', quantity: 2 }, { item: 'Banana', quantity: 4 }, { item: 'Apple', quantity: 1 }] */

let myArray = [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }];
let newArray = [];
let resultArray = [];
let quantity = 0;

for (let i = 0; i < myArray.length; i++) {

    let brand = myArray[i].brand;



    console.log(brand); // output apple samsung apple
   
    if (newArray[brand]) {
        newArray[brand]++
    } else {
        newArray[brand] = 1;

    }
    console.log(newArray[brand]); // output apple 1 samsung 1 apple 2
    
}

for(brand in newArray){

    resultArray.push({
        item: brand,
        quantity: newArray[brand]
    }) // still dont understand why we do object loop insted array loop
}

console.log(resultArray);