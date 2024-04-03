/* Given an array of objects where each object has properties name and age, write a JavaScript 
program to transform this array into an object of arrays categorized by age. If the input array is: 
[{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }]
output
{ '20': ['Amy'], '25': ['John', 'cam'] }*/

let arrayOfObjects = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }];
let objectsOfArray = {};
let newArry = [];
for (i = 0; i < arrayOfObjects.length; i++) {
    
  
   
}

console.log(objectsOfArray);

/*for (key in objectsOfArray){
    for (let i = 0; i < newArry.length; i++) {
        if (newArry[i] === objectsOfArray)
}

}*/