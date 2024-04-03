/* Problem: Given an array of objects where each object has properties brand and model, write a JavaScript program 
to transform this array into an object of arrays categorized by brand. If the input array is 
[{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }]

output: [{ item: 'Apple', quantity: 2 }, { item: 'Banana', quantity: 4 }, { item: 'Apple', quantity: 1 }] */

let myArray = [{ brand: 'Apple', model: 'iPhone X' }, { brand: 'Samsung', model: 'Galaxy S10' }, { brand: 'Apple', model: 'iPhone 8' }];
let newArray = [];

for (let i = 0; i < myArray.length; i++) {

    let brandName = myArray[i].brand;
    let modelName = myArray[i].model;
    console.log(brandName);
    console.log(modelName);
}