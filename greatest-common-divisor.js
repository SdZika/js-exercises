let firstNuber = 15;
let secondNuber = 15;
let gcd = 1;
if (firstNuber <= secondNuber) {
for (let i = 0; i <=firstNuber; i++) {
    if (firstNuber % i === 0 && secondNuber % i === 0) {
        gcd = i;
       
    }
  }
} else {
    for (let i = 0; i <=secondNuber; i++) {
        if (firstNuber % i === 0 && secondNuber % i === 0) {
            gcd = i; 
        }
      }
}
console.log("The GCD of " + firstNuber + " and " + secondNuber + " is " + gcd + ".");
