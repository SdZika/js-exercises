let n = 5;

for (let i = 1; i <= 5; i++) {
    let raw = " ";
    for (let j = 1; j <= i; j++) {
        raw = raw + " " + i*j;
    }
    console.log(raw);
};
