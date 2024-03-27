let personAge = {marko: 20, milan: 10, ivan: 14, nemanja: 30};
for (let key in personAge) {
    if (personAge[key] < 13) {
        personAge[key] = 13;
    } else if ( personAge[key] > 12 && personAge[key] < 20) {
        personAge[key] = personAge[key] + 1;
    } else {
        personAge[key] = 21;
    }
}

console.log(personAge);