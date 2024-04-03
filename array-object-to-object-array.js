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


