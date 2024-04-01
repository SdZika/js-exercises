/* Problem 4:
Write a JavaScript program that generates a simple math quiz question using random numbers and asks the user for the answer using prompt(). 
Use a switch statement to randomize between addition, subtraction, and multiplication questions. For example, "What is 3 + 4?" or "What is 10 - 3?" or "What is 5 * 2?" */

const prompt = require("prompt-sync")({sigint:true});
let numOne = Math.floor(Math.random() * 10);
let numTwo = Math.floor(Math.random() * 10);

switch (true) {
    case numOne <= 3 : 
        prompt(`What is ${numOne} * ${numTwo} ?`);
        brake;

    case numOne <= 6 : 
        prompt(`What is ${numOne} + ${numTwo} ?`);
        brake;
    
    default:
        prompt(`What is ${numOne} - ${numTwo} ?`);
        

}
