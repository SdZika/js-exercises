let str = "hello world";
let strToArray = str.split(" ");
for (let i = 0; i < strToArray.length; i++) {
    strToArray[i] = strToArray[i].charAt(0).toUpperCase() + strToArray[i].slice(1);
}
let backToString = strToArray.join().replaceAll(","," ");

let strRev = ""; 
    for (let i = backToString.length - 1; i >= 0; i--) { 
        strRev += backToString[i]; 
    } 
    console.log(strRev);