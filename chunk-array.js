function chunkArray (arr, x){
    const firstArray = arr.slice(0, x);
    const secondArray = arr.slice(x, arr.length)
    const newArray =[]
    newArray.push(firstArray);
    newArray.push(secondArray);
    return newArray;
}

console.log(chunkArray([1,3,5,6,7,9], 2));