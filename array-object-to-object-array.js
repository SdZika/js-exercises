let arrayOfObjects = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }];
let objectsOfArray = {};
let newArry = [];
for (i = 0; i < arrayOfObjects.length; i++) {
    
    for (key in arrayOfObjects[i]) {
        
        if ( typeof arrayOfObjects[i][key] === "number") {
            objectsOfArray[arrayOfObjects[i][key]] = newArry;
           
        } else if ( typeof arrayOfObjects[i][key] !== "number"){
            
            newArry.push(arrayOfObjects[i][key]);
            
        }
    }
}
console.log(objectsOfArray);
console.log(newArry);


/*for (key in objectsOfArray){
    for (let i = 0; i < newArry.length; i++) {
        if (newArry[i] === objectsOfArray)
}

}*/