/* Given an array of objects where each object has properties name and age, write a JavaScript 
program to transform this array into an object of arrays categorized by age. If the input array is: 
[{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }]
output
{ '20': ['Amy'], '25': ['John', 'cam'] }*/

let arrayOfObjects = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }];
let objectsOfArray = {};

for (i = 0; i < arrayOfObjects.length; i++) {

        
        let personAge = arrayOfObjects[i].age;
        let personName = arrayOfObjects[i].nema;
        if (objectsOfArray[personAge] === undefined) {
            objectsOfArray[personAge] = [];
        }

    objectsOfArray[personAge].push(personName);
}
console.log(objectsOfArray);




