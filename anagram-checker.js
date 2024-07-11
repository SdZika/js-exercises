function anagramCheck(string1, string2) {
    const newArray = [];
    if(string1.length === string2.length){
        for (let i =0; i<=string1.length; i++) {
            if (string2.includes(string1[i])) {
                newArray.push(string1[i]);
            }
        }
        if(newArray.join("")===string1) {
            return true;
        } else return false;
    }
    else return false;
}

 console.log(anagramCheck("de", "vde"));