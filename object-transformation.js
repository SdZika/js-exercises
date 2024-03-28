let  studentGrade = [{marko: "A"}, {biljana: "B"}, {dunja: "C"}, {vukan: "D"}];
let newObject = {};



for (let i = 0; i < studentGrade.length; i++) {
    
   for (let key in studentGrade[i]) {
     
      newObject[key] = studentGrade[i][key];
   
   
   }
   
}
console.log(newObject);